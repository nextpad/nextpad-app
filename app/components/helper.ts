export async function uploadImage(image: string, title: string) {
   try {
      const formData = new URLSearchParams();
      formData.append("image", image);
      formData.append("name", title);

      let res: any = await fetch(
         "https://api.imgbb.com/1/upload?key=fb2138cb2ed0b5b5733068dd12d42801",
         {
            method: "POST",
            body: formData,
            headers: {
               "Access-Control-Allow-Origin": "",
            },
         }
      );
      res = await res.json();
      const url = res.data.display_url;
      return url;
   } catch (err) {
      return null;
   }
}
