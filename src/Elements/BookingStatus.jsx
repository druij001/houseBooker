export default function BookingStatus({isApproved}) {


    return (
        <div>
            <h2>{isApproved ? `Approved by owner` : `Awaiting approval from owner`}</h2>
        </div>
    )
}