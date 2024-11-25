import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { db, auth } from "./Firebase/Firebase";
import { ArrowLeft } from "lucide-react";
import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";

const UserList = ({ users, setReceiverData, navigate, currentUserId }) => {
    const handleToggle = (username, userId) => {
        setReceiverData({
            username: username,
            userId: userId,
        });
        navigate(`/chat/${userId}`);
    };

    return (
        <ul className="w-full max-w-sm bg-neutral-900">
            {users?.map((value) => {
                if (currentUserId !== value.userId)
                    return (
                        <li key={value.userId} className="border-b last:border-b-0">
                            <button
                                onClick={() => handleToggle(value.username, value.userId)}
                                className="flex items-center w-full px-4 py-4 hover:bg-neutral-950"
                            >
                                <span className="ml-3 text-white">{value.username}</span>
                            </button>
                        </li>
                    );
            })}
        </ul>
    );
};

export default function Home() {
    const [users, setUsers] = useState([]);
    const [receiverData, setReceiverData] = useState(null);
    const [chatMessage, setChatMessage] = useState("");
    const [allMessages, setAllMessages] = useState([]);
    const user = auth.currentUser;
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Users"), (snapshot) => {
            setUsers(snapshot.docs.map((doc) => doc.data()));
        });
        return unsub;
    }, []);

    useEffect(() => {
        if (receiverData) {
            const unsub = onSnapshot(
                query(
                    collection(
                        db,
                        "Users",
                        user?.uid,
                        "chatUsers",
                        receiverData?.userId,
                        "messages"
                    ),
                    orderBy("timestamp")
                ),
                (snapshot) => {
                    setAllMessages(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            messages: doc.data(),
                        }))
                    );
                }
            );
            return unsub;
        }
    }, [receiverData?.userId]);

    const sendMessage = async () => {
        try {
            if (user && receiverData && chatMessage.trim()) {
                await addDoc(
                    collection(
                        db,
                        "Users",
                        user.uid,
                        "chatUsers",
                        receiverData.userId,
                        "messages"
                    ),
                    {
                        username: user.displayName,
                        messageUserId: user.uid,
                        message: chatMessage,
                        timestamp: new Date(),
                    }
                );

                await addDoc(
                    collection(
                        db,
                        "Users",
                        receiverData.userId,
                        "chatUsers",
                        user.uid,
                        "messages"
                    ),
                    {
                        username: user.displayName,
                        messageUserId: user.uid,
                        message: chatMessage,
                        timestamp: new Date(),
                    }
                );
            }
        } catch (error) {
            console.log(error);
        }
        setChatMessage("");
    };

    const handleHome=(e)=>{
        e.preventDefault();
        navigate('/')
    }

    return (
        <div className="flex flex-row flex-1 w-full bg-black py-3">
            <div className="flex flex-col w-1/5 h-[95vh] m-2 bg-neutral-900 rounded-lg shadow">
                <div className="flex justify-start items-center gap-4 p-4 border-b">
                    <button>
                        <ArrowLeft onClick={handleHome} className="h-5 w-5 mx-2 cursor-pointer text-white" />
                    </button>
                    <h4 className="font-medium text-white">{user?.displayName}</h4>
                </div>
                <div className="p-4 border-b text-white">All users</div>
                <div className="overflow-y-auto">
                    <UserList
                        users={users}
                        setReceiverData={setReceiverData}
                        navigate={navigate}
                        currentUserId={user?.uid}
                    />
                </div>
            </div>

            <div className="flex flex-col w-4/5 h-[95vh] m-2 bg-neutral-950 rounded-lg shadow">
                <h4 className="p-4 border-b font-medium text-white">
                    {receiverData ? receiverData.username : user?.displayName}
                </h4>

                <div className="flex-1 bg-neutral-900 p-4 overflow-y-auto">
                    {allMessages?.map(({ id, messages }) => (
                        <div
                            key={id}
                            className={`flex ${user?.uid === messages.messageUserId
                                ? "justify-end"
                                : "justify-start"
                                } mb-4`}
                        >
                            <span
                                className={`bg-purple-800 text-white p-3 rounded-lg max-w-md text-sm
                                    ${user?.uid === messages.messageUserId
                                        ? "rounded-tr-none text-right"
                                        : "rounded-tl-none text-left"
                                    }`}
                            >
                                {messages.message}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex items-center p-4 border-t">
                    <input
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        className="flex-1 p-2 border rounded-lg bg-neutral-900 text-white placeholder:text-white focus:outline-none focus:ring-2 focus:ring-purple-800"
                        type="text"
                        placeholder="Type message..."
                    />
                    <button
                        onClick={sendMessage}
                        className="ml-2 p-2 text-purple-800 hover:bg-purple-400 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}