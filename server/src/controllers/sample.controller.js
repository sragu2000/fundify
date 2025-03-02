const sampleProtectedRoute = async (req, res, next) => {
    try {
        return res.status(200).json({ message: "Protected Route" });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    sampleProtectedRoute,
};
