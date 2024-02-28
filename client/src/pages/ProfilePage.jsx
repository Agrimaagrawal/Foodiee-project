import Navbar from "../components/Navbar"
import './../styles/dashboard.css'
import foodimage from './../assets/ladoo.jpg'
import Order from "../components/Order"
const ProfilePage = () =>{
    const orders = [
        {
            name:"laddo",
            description:"hdkjdnc cejcne cnwdjkcnedj cdjskcneljk sdcjlmsak c",
            orderedOn: "21/10/2013 10:00AM",
            deliveredOn:"21/10/2033 10:45AM"

        },  {
            name:"laddo",
            description:"hdkjdnc cejcne cnwdjkcnedj cdjskcneljk sdcjlmsak c",
            orderedOn: "21/10/2013 10:00AM",
            deliveredOn:"21/10/2033 10:45AM"

        },
        {
            name:"laddo",
            description:"hdkjdnc cejcne cnwdjkcnedj cdjskcneljk sdcjlmsak c",
            orderedOn: "21/10/2013 10:00AM",
            deliveredOn:"21/10/2033 10:45AM"

        }


    ]
return(
    <>
    <Navbar />
   
        <>
        <div className="profile-main">
            <p><b>Welcome Hansika</b></p>
            <img src = {foodimage} className="profile-img" />
            <div className="profile-details">
            <div className="profile-name"><span><b>Name:</b></span>Hansika Sharma</div>
            <div className="profile-email"><span><b>Email:</b></span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
            <div className="profile-email"><span><b>Address:</b></span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, incidunt.</div>
           
            <div className="edit-profile"><a href="#">click here to edit profile</a></div>
            </div>
            <div className="my-orders">
                <h1>Your orders</h1>  
                {orders.map((order)=> <Order order = {order}/>)}  
            </div>
        </div>
        </>
    

    </>
)

}
export default ProfilePage