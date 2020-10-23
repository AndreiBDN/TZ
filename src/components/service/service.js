class FetchData {
    constructor(){
        this.url = 'https://test-job.pixli.app/send.php';
    }
    
    postData = async (data)=> {
        console.log(data);
        const res = await fetch(this.url,{
            method: 'post',
            headers: {
                'content-type': 'multipart/form-data'
            },
            body: data
        })
        return await res.json();
    }

}
export default FetchData;