import axios from "axios";

export const searchMusic = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({ msg: "Query missing" });
    }

    console.log("SEARCH:", query);
    console.log("API KEY:", process.env.YOUTUBE_API_KEY);

    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query + " official song",
          key: process.env.YOUTUBE_API_KEY,
          maxResults: 100,
          type: "video"
        }
      }
    );

    const videos = response.data.items.map((item) => ({
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      videoId: item.id.videoId
    }));

    res.json(videos);

  } catch (error) {
    console.log("❌ FULL ERROR:", error.response?.data || error.message);

    res.status(500).json({
      msg: "Backend error",
      error: error.response?.data || error.message
    });
  }
};