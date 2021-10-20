import Profile from '../profile/Profile'
import Statistics from '../statistics/Statistics'
import FriendsList from '../friends-list/FriendsList'
import Transaction from '../transaction/Transaction'

import user from '../../JSON-data/user.json'
import stats from '../../JSON-data/stats.json'
import friends from '../../JSON-data/friends.json'
import transaction from '../../JSON-data/transaction.json'


export default function App() {
    return (
        <div className="App">
            <Profile data={user}/>
            <>
            <Statistics stats={stats} title='Upload stats'/>
            <FriendsList data={friends}/>
            </>
            <Transaction data={transaction}/>
        </div>
    );
}
