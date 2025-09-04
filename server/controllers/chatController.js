import Chat from "../models/chat.js";

// APi controller for new chat



export const createChat = async(req,res)=>{
    try {
        const userId = req.user._id;

        const chatData = {
            userId,
            messages:[]
            ,name:"Newchat",
            userName : req.user.name
        }

        await Chat.create(chatData);
        res.json({success:true,message:"Chat created"})

    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

// Get Chats

export const getChat = async(req,res)=>{
    try {
        const userId = req.user._id;
        const chats = await Chat.find({userId}).sort({updatedAt: -1});
        
        res.json({success:true,message:chats})
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

// Delete selected chat

export const delChat = async(req,res)=>{
    try {
        const userId = req.user._id;
        const chatId = req.body

        const deletedChat = await Chat.findByIdAndDelete({_id :chatId,userId});
        
        res.json({success:true,message:`Chat deleted:${deletedChat}`})
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}