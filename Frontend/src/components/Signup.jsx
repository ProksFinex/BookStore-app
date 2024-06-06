import React from "react";
import axios from "axios";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Signup() {
    //location ki bhasudi
    const location=useLocation();
    const navigate=useNavigate()
    const from =location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo={
            //this beacuse frontend m yehi mill raha tha jab hum hum console.log(data) kar rahe the toh.. yahi se value utha rahe hai ab
            fullname: data.fullname,
            email:data.email,
            password:data.password
        }// ab issi info ko humko store krna h toh api ko call krnge
       await axios.post("http://localhost:4001/user/signup",userInfo) //iss url m ye info save krwani thi
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('Sign-up Successful !');
                navigate(from,{replace:true});
            }
            //stire krna hia usko browser ka local storage m
            localStorage.setItem("Users",JSON.stringify(res.data.user))//res.data isse object k form m aayega jo humko nahi chaiye
            //res.data.user = isse msg ni jayega user cerated wala bass main info jayegi jo user m hai i.e name id n all

        }).catch((err)=>{
            //response ka messge show krna hai yaha pe
            if(err.response){
                console.log(err)
                toast.error("Error:"+err.response.data.message);
            }
            
        })
    }
    return (
        <>
        <div className="flex h-screen items-center justify-center  ">
            <div className="w-[600px]">
            <div className="modal-box ">
                <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link
                    to="/"
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </Link>

                <h3 className="font-bold text-lg">Signup</h3>
                <div className="mt-4 space-y-2">
                    <span> Name </span>
                    <br />
                    <input
                    type="text"
                    placeholder="Enter your fullname"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("fullname", { required: true })}
                    />
                    <br />
                    {errors.fullname && (
                        <span className="text-sm text-red-500">
                        This field is required
                        </span>
                    )}
                </div>
                {/*email */}
                <div className="mt-4 space-y-2">
                    <span> Email </span>
                    <br />
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("email", { required: true })}
                    />
                    <br />
                    {errors.email && (
                        <span className="text-sm text-red-500">
                        This field is required
                        </span>
                    )}
                </div>
                {/*passwrod */}
                <div className="mt-4 space-y-2">
                    <span> Password </span>
                    <br />
                    <input
                    type="text"
                    placeholder="Enter your password"
                    className="w-80 px-3 py-1 border rounded-md outline-none"
                    {...register("password", { required: true })}
                    />
                    <br />
                    {errors.password && (
                        <span className="text-sm text-red-500">
                        This field is required
                        </span>
                    )}
                </div>
                {/*submit button */}
                <div className="flex justify-around mt-4">
                    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Signup{" "}
                    </button>
                    <p className="text-xl">
                    have an account?{" "}
                    <button
                        to="/"
                        className="underline text-blue-500 cursor-pointer"
                        onClick={() =>
                        document.getElementById("my_modal_3").showModal()
                        }
                    >
                        Login
                    </button>
                    <Login />
                    </p>
                </div>
                </form>
            </div>
            </div>
        </div>
        </>
    );
}

export default Signup;
