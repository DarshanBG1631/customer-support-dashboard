const AgentPerformance=()=>{

    return(

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="font-bold text-lg mb-5">
                Agent Performance
            </h2>

            <div className="space-y-4">

                <div>
                    <p className="text-sm">
                        Resolution Rate
                    </p>

                    <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

                        <div className="w-[82%] h-3 rounded-full bg-green-500"></div>

                    </div>

                </div>

                <div>
                    <p className="text-sm">
                        Customer Satisfaction
                    </p>

                    <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

                        <div className="w-[95%] h-3 rounded-full bg-yellow-400"></div>

                    </div>

                </div>

                <div>
                    <p className="text-sm">
                        First Response Time
                    </p>

                    <div className="w-full h-3 bg-gray-200 rounded-full mt-2">

                        <div className="w-[70%] h-3 rounded-full bg-blue-500"></div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AgentPerformance;