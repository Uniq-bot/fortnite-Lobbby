import React from 'react'
import { UserPlus } from "lucide-react";

const AddFriend = ({ suggestedFriends }) => {
    return (
        <div className="w-full h-screen flex flex-col">
            <p className="w-full text-3xl text-gray-400 px-2 py-5 bg-gradient-to-t from-black/20 to-white/20">
                Add Friends
            </p>

            <div className="w-full min-h-50 flex flex-col">
                <h1 className="text-3xl w-full text-gray-300 px-2 py-5 bg-[#0E1736]">
                    Suggested Friends
                </h1>

                <div className="flex flex-col w-full">
                    {suggestedFriends.length > 0 ? (
                        suggestedFriends.map((user, index) => (
                            <div
                                key={index}
                                className={`w-full flex items-center justify-between pr-5 gap-4 h-20 border-b border-gray-300/10 text-gray-300 hover:bg-blue-950/30 transition`}
                            >
                                {/* Avatar */}
                                <div className="relative w-20 h-20 cursor-pointer flex items-center justify-center rounded-full overflow-hidden group">
                                    <img
                                        src={user.avatar}
                                        alt={user.username}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                        <UserPlus className="text-white w-6 h-6" />
                                    </div>
                                </div>

                                {/* Username + Info */}
                                <div className="flex flex-col w-2/5 items-start">
                                    <h2 className="text-2xl">{user.username}</h2>
                                </div>

                                <div className="text-sm text-gray-400">
                                    <p>Mutual: {user.mutual}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 px-4 py-3">No suggested friends</p>
                    )}
                </div>
                <div>
                    <p className="text-3xl w-full text-gray-300 px-2 py-5 bg-[#0E1736]">Search Friends</p>
                </div>
            </div>
        </div>
    )
}

export default AddFriend
