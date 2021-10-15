import React from 'react';
import {
    HeadingText,
    LineChart,
    NrqlQuery,
} from 'nr1';

const ACCOUNT_ID = 3148456  // <YOUR NEW RELIC ACCOUNT ID>

export default class NewsletterSignups extends React.Component {
    render() {
        return <div>
            <HeadingText className="chartHeader">
                Newsletter subscriptions per version
            </HeadingText>
            <NrqlQuery
                accountId={ACCOUNT_ID}
                query="SELECT count(*) FROM subscription FACET page_version SINCE 30 MINUTES AGO TIMESERIES"
                pollInterval={60000}
            >
                {
                    ({ data }) => {
                        return <LineChart data={data} fullWidth />;
                    }
                }
            </NrqlQuery>
        </div>
    }
}

// import React from 'react';
// import { HeadingText, LineChart } from 'nr1';

// export default class NewsletterSignups extends React.Component {
//     render() {
//         const versionASignups = {
//             metadata: {
//                 id: 'version-a-newsletter-signups',
//                 name: 'Version A',
//                 viz: 'main',
//                 color: 'blue',
//             },
//             data: [
//                 { x: 0, y: 0 },
//                 { x: 10, y: 10 },
//                 { x: 20, y: 15 },
//                 { x: 30, y: 5 },
//                 { x: 40, y: 30 },
//                 { x: 50, y: 25 },
//             ],
//         }
//         const versionBSignups = {
//             metadata: {
//                 id: 'version-b-newsletter-signups',
//                 name: 'Version B',
//                 viz: 'main',
//                 color: 'green',
//             },
//             data: [
//                 { x: 0, y: 20 },
//                 { x: 10, y: 5 },
//                 { x: 20, y: 25 },
//                 { x: 30, y: 45 },
//                 { x: 40, y: 50 },
//                 { x: 50, y: 35 },
//             ],
//         }
//         return <div>
//             <HeadingText className="chartHeader">
//                 Newsletter subscriptions per version
//             </HeadingText>
//             <LineChart data={[versionASignups, versionBSignups]} fullWidth />
//         </div>
//     }
// }
