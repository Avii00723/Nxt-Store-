import {createClient} from '@supabase/supabase-js';

const bucket = 'main-bucket'
const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/rest\/v1\/?$/, '');

export const supabase=createClient(
    supabaseUrl as string,
    process.env.SUPABASE_KEY as string
);

export const uploadImage=async (image:File)=>{
    const timestamp=Date.now();
    const safeName=image.name
        .toLowerCase()
        .replace(/[^a-z0-9.]+/g,'-')
        .replace(/^-+|-+$/g,'');
    const newName=`${timestamp}-${safeName}`;
    const {data,error}=await supabase.storage.from(bucket).upload(newName,image,{
        cacheControl:'3600',
    });
    if(!data){
        throw new Error(error?.message || 'Failed to upload image');   
    }
    return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
}

export const deleteImage=async(url:string)=>{
    const imageName=url.split('/').pop();
    if(!imageName){
        throw new Error('Invalid image URL');
    }
    return supabase.storage.from(bucket).remove([imageName]);
}