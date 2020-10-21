class FetchData {
    constructor(){
        this.url = 'https://test-job.pixli.app/send.php';
    }
    
    postData = async (data)=> {
        
        const res = await fetch(this.url,{
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        return await res.json();
    }

}
export default FetchData;