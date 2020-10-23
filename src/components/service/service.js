class FetchData {
    constructor(){
        this.url = 'https://test-job.pixli.app/send.php';
    }
    
    postData = async (data)=> {
        const res = await fetch(this.url,{
            method: 'post',
            body: data
        })
        return await res.json();
    }

}
export default FetchData;