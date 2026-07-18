import type { Conversation } from "../../types/conversation";

interface Props{
    conversations:Conversation[];
}

const RecentActivity=({conversations}:Props)=>{

    return(

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-lg mb-5">
                Recent Activity
            </h2>

            <div className="space-y-4">

                {conversations.slice(0,5).map((conversation)=>(

                    <div
                    key={conversation.id}
                    className="flex justify-between border-b pb-3"
                    >

                        <div>

                            <p className="font-medium">
                                {conversation.customerName}
                            </p>

                            <p className="text-sm text-gray-500">
                                {conversation.lastMessage}
                            </p>

                        </div>

                        <span className="text-xs text-gray-500">
                            {conversation.waitingTime}
                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default RecentActivity;