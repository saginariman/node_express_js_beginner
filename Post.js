// 3) в этом файле модел таблицы постов в базе, модель создает таблицу со структурой со схемы и имеет функции работы с таблицей
import mongoose from "mongoose";

const Post = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    picture: {type: String},
})

export default mongoose.model('Post', Post)