import { connect } from "mongoose";

export async function startConnection() {
    await connect('mongodb://localhost:27017/photo-gallery-db', {
        useNewUrlParser: true
    });
    console.log('Dtabase is Connected!');
}