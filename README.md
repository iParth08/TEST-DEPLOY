import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

async function updatePoints(userId, points) {
const userRef = doc(db, "users", userId);
await updateDoc(userRef, {
points: increment(points),
});
}

async function completeTask(userId, taskId, points) {
// Logic to mark task complete...
await updatePoints(userId, points);
}
