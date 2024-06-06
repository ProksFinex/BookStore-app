import User from "../modal/user.modal.js"
import bcryptjs from "bcryptjs"//password k liye hai ye

//controller m fucntion define krte hai
export const signup= async (req,res)=>{
    //ye data body se milega
    try {
        const {fullname,email,password}=req.body;
        //user exist or not
        const user=await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists"})
        }

        //database m store krnahai ab
//yaha password bhejne se just phle hum usko hash kr denge
        const hashPassword= await bcryptjs.hash(password,10)
        const createdUser=new User({
            fullname:fullname,
            email:email,
            password:hashPassword,
        })
        //now save krna hai
        await createdUser.save()
        res.status(201).json({message:"user created successfully",
            user:{
                _id: createdUser._id,
                fullname:createdUser.fullname,
                email:createdUser.email
            }
        })
    } catch (error) {
        console.log("Error:"+error.message);
        res.status(500).json({message:"Internal server error"})
    }
}

//next step hai inke liye route define krna 

// ab login k liye 
export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user= await User.findOne({email});
        //password bhi toh match hona cahiye na
        const isMatch=await bcryptjs.compare(password,user.password /*ye stored waala pass hai*/)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }else{
            res.status(200).json({message:"Login successfully",
                //iske sath sath id fullname aur email bhi send kr denge for frontend
                user:{
                    _id:user._id,
                    fullname:user.fullname,
                    email:user.email
                },
            })
        }
    } catch (error) {
        console.log("Error:"+error.message);
        res.status(500).json({message:"Internal server error"})
    }
    //now iska bhi route define krnge route m
}