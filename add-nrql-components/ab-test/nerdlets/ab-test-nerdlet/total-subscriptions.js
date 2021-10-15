import React from 'react';
import {
    HeadingText,
    NrqlQuery,
    PieChart,
} from 'nr1';

const ACCOUNT_ID = 3148456  // <YOUR NEW RELIC ACCOUNT ID>

export default class TotalSubscriptions extends React.Component {
    render() {
        return <div>
            <HeadingText className="chartHeader">
                Total subscriptions per version
            </HeadingText>
            <NrqlQuery
                accountId={ACCOUNT_ID}
                query="SELECT count(*) FROM subscription FACET page_version SINCE 7 DAYS AGO"
                pollInterval={60000}
            >
                {
                    ({ data }) => {
                        return <PieChart data={data} fullWidth />
                    }
                }
            </NrqlQuery>
        </div>
    }
}

// import React from 'react';
// import { HeadingText, PieChart } from 'nr1';

// export default class TotalSubscriptions extends React.Component {
//     render() {
//         const subscriptionsA = {
//             metadata: {
//                 id: 'subscriptions-A',
//                 name: 'Version A',
//                 viz: 'main',
//                 color: 'blue',
//             },
//             data: [
//                 { y: 259 },
//             ],
//         }
//         const subscriptionsB = {
//             metadata: {
//                 id: 'subscriptions-B',
//                 name: 'Version B',
//                 viz: 'main',
//                 color: 'green',
//             },
//             data: [
//                 { y: 318 },
//             ],
//         }
//         return <div>
//             <HeadingText className="chartHeader">
//                 Total subscriptions per version
//             </HeadingText>
//             <PieChart data={[subscriptionsA, subscriptionsB]} fullWidth />
//         </div>
//     }
// }
