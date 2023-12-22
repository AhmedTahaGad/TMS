import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Please provide a title"],
        maxLlength: [40, "Title cannot be more than 40 characters"],

    },
    description: {
        type: String,
        required: true,
        maxLlength: [200, "Description cannot be more than 200 characters"],

    },
    color: {
        type: String,
        default: "#ffffff",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

export default mongoose.model("Note", NotesSchema);