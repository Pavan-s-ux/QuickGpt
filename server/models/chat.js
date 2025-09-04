import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    userId: { type: String, ref: "User", required: true },
    userName: { type: String, required: true },
    name: { type:String, required: true },
    messages: [
        {
            isImage: { type: Boolean, required: true },
            isPublished: { type: Boolean, deafult: false },
            role: {type: String, required: true,},
            content: { type: String, required: true },
            timeStamp: { type: Number, required: true }
        }
    ]
}, { timestamp: true })

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;