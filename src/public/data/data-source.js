// class DataSource {
//   static async searchRestaurant(keyword) {
//     try {
//       const response = await fetch(`https://restaurant-api.dicoding.dev/search?q=${keyword}`);
//       const responseJson = await response.json();

//       if (responseJson.restaurants) {
//         return responseJson.restaurants;
//       }

//       throw new Error('Restoran yang kamu cari tidak ada nih. Mau mencari restoran lain ?');
//     } catch (error) {
//       throw new Error('Opsss... Terjadi kesalahan dalam mencari restoran.');
//     }
//   }
// }

// export default DataSource;
