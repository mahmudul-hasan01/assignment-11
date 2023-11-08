import axios from "axios";


const MyScheduleCaet = ({ BookingData }) => {
    const { _id, Name, Image, email, ProviderEmail, TakingDate, Instruction, Price, option } = BookingData
    console.log(Object.keys(BookingData).join(','))
    const hendleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const option =form.options.value
        const options ={option}
        axios.patch(`https://server-site-lime.vercel.app/PurchaseData/${_id}`,options)
        .then(data => console.log(data?.data))
    }
    return (
        <div>
            <div className="overflow-x-auto mb-7">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image/Name</th>
                            <th>User Email</th>
                            <th>Provider Email</th>
                            <th>Date</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={Image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{Name}</div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span>{email}</span>
                            </td>
                            <td>{ProviderEmail}</td>
                            <td>{TakingDate}</td>
                            <td>{Price}</td>
                            <th>
                                    {
                                        option ? <h1>{option}</h1> : <form onSubmit={hendleSubmit}>
                                        <button>
                                            <select name="options">
                                                <option>Pending</option>
                                                <option>In Progress</option>
                                                <option>Completed</option>
                                            </select>
                                        </button>
                                    </form>
                                    }
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyScheduleCaet;