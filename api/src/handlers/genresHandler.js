const { getAllGenres }= require('../controllers/getAllGenres');
const getGenres= async (req, res)=>{
    try {
        const genres= await getAllGenres();
        return res.status(200).json(genres);
    } catch (error) {
        return res.status(400).json({ error: error.message});
    }
};

module.exports= {
    getGenres
};