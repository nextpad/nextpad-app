export async function uploadImage(image: string, title: string) {
   try {
      const formData = new URLSearchParams();
      formData.append("image", image);
      formData.append("name", title);

      if (!process.env.IMAGE_API_URL) return;

      let res: any = await fetch(process.env.IMAGE_API_URL + "/upload", {
         method: "POST",
         body: formData,
         headers: {
            "Access-Control-Allow-Origin": "",
         },
      });
      res = await res.json();
      console.log(res);
      const url = process.env.IMAGE_API_URL + "/" + res.path;
      return url;
   } catch (err: any) {
      console.log(err.message);
      return null;
   }
}
