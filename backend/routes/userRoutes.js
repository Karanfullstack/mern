import express from "express";
import AllUsers, {
  CreateUser,
  DeleteSingleUser,
  SingleUser, 
  UpdateSingleUser,
} from "../controllers/userControllers.js";
   
// @Initialization Router
const router = express.Router();

router.post("/", CreateUser);
router.get("/", AllUsers);
router.get("/:id", SingleUser);
router.patch("/:id", UpdateSingleUser);
router.delete("/:id", DeleteSingleUser);

export default router;
