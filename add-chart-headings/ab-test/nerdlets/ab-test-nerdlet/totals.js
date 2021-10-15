import React from 'react';
import { HeadingText, TableChart } from 'nr1';

export default class VersionTotals extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const versionTotals = {
            metadata: {
                id: `totals-${this.props.version}`,
                name: `Version ${this.props.version}`,
                columns: ['name', 'count'],
            },
            data: [
                {
                    name: 'Subscriptions',
                    count: 0
                },
                {
                    name: 'Page views',
                    count: 0
                },
            ],
        }
        // return <TableChart data={[versionTotals]} fullWidth />
	return <div>
            <HeadingText className="chartHeader">
                Version {this.props.version.toUpperCase()} - Page views vs. subscriptions
            </HeadingText>
            <TableChart data={[versionATotals]} fullWidth />
        </div>
    }
}
