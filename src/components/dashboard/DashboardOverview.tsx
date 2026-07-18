import AnalyticsCards from "./AnalyticsCards";
 import TicketChart from "./TicketChart";
import RecentActivity from "./RecentActivity";
import AgentPerformance from "./AgentPerformance";
import type { Conversation } from "../../types/conversation";

interface Props{
    conversations:Conversation[];
}

const DashboardOverview=({conversations}:Props)=>{

    return(

        <div className="p-6 space-y-6">

            <AnalyticsCards conversations={conversations}/>

            <div className="grid grid-cols-2 gap-6">

                <TicketChart
                    conversations={conversations}
                />

                <AgentPerformance/>

            </div>

            <RecentActivity
                conversations={conversations}
            />

        </div>

    );

}

export default DashboardOverview;