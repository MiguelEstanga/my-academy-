import { Api , endpoints, settings } from './Api';
import axios from 'axios';

export async function  escuelas() 
{
   const  response = await axios.get(`${Api.defaultUrl}${endpoints.escuelas}`)
   return response;
}

export async function  schedule() 
{
   
    const  response = await axios.get(`${endpoints.schedule}`)
    return response;
}

export async function  getLanguage()
{
    const  response = await axios.get(`${endpoints.language}`)
    return response;
}

export async function  getProfesor(id)
{
    const  response = await axios.get(`${endpoints.profesor}${id}`)
    return response;
}

export async function  review({schoolId,  languageId})
{
    const response = await axios.post(`${endpoints.review}` , {
        body:{
            "id_lenguage":languageId,
            "school_id":schoolId
        }
    })

    return response;
}

export async function  getCategoria()
{
    const  response = await axios.get(`${endpoints.categoria}`)
    return response;
}

export async function  getFavoriteVideo({id_teacher, id_school, id_language})
{
    const  response = await axios.post(`${endpoints.favoriteVideo}` ,{
        body:{
            id_teacher:id_teacher,
            id_school:id_school,
            id_language:id_language,
        }
    }
    )
    return response;
}

export async function  SmartMoneyModule()
{
    const  response = await axios.get(`${endpoints.smartMoney}` )
    return response;
}