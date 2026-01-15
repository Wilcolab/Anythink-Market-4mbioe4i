/**
 * Express router for comment-related API endpoints
 * @type {Router}
 */

/**
 * Retrieves all comments from the database
 * @async
 * @route GET /
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Error} Logs error to console if database query fails
 */

/**
 * Deletes a comment by its ID
 * @async
 * @route DELETE /:id
 * @param {string} req.params.id - The MongoDB ObjectId of the comment to delete
 * @returns {Promise<void>} JSON object with success status
 * @throws {Error} Passes error to next middleware if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        console.log(err);
    }
});

//add another endpoint for deleting a comment
router.delete("/:id", async (req, res, next) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ success: true });
    } catch (err) {
        next(err);
    }
});