class Youtube {
    constructor(key) {
        this.key = key;
        this.getrequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    async mostPupular() {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&part=snippet&chart=mostPopular&maxResults=30&key=${this.key}`,
            this.getrequestOptions);
        const result_1 = await response.json();
        return result_1.items;
    }

    async search(query) {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&key=AIzaSyDeMl38hP-K43MGTv6oNhPx5BepglIltbY&part=snippet&maxResults=30&q=${query}&type=video&key=${this.key}`,
            this.getrequestOptions);
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    }




}

export default Youtube;