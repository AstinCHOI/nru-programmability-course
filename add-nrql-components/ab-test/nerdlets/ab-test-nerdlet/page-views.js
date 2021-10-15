import React from 'react';
import {
    HeadingText,
    LineChart,
    NrqlQuery,
} from 'nr1';

const ACCOUNT_ID = 3148456  // <YOUR NEW RELIC ACCOUNT ID>

export default class VersionPageViews extends React.Component {
    render() {
        return <div>
            <HeadingText className="chartHeader">
                Version {this.props.version.toUpperCase()} - Page views
            </HeadingText>
            <NrqlQuery
                accountId={ACCOUNT_ID}
                query={`SELECT count(*) FROM pageView WHERE page_version = '${this.props.version}' TIMESERIES`}
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

// export default class VersionPageViews extends React.Component {
//     render() {
//         const versionPageViews = {
//             metadata: {
//                 id: `page-views-${this.props.version}`,
//                 name: `Version ${this.props.version.toUpperCase()}`,
//                 viz: 'main',
//                 color: 'blue',
//                 units_data: {
//                     y: 'MS'
//                 }
//             },
//             data: [
//                 { x: 0, y: 10 },
//                 { x: 10, y: 13 },
//                 { x: 20, y: 11.5 },
//                 { x: 30, y: 10 },
//                 { x: 40, y: 8.75 },
//                 { x: 50, y: 9 },
//             ],
//         }
//         return <div>
//             <HeadingText className="chartHeader">
//                 Version {this.props.version.toUpperCase()} - Page views
//             </HeadingText>
//             <LineChart data={[versionPageViews]} fullWidth />
//         </div>
//     }
// }
