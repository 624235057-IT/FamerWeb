<template>
  <div class="container">
    <br /><br />
    <div class="row">
      <div>
        <h2>Add New Farmer</h2>
        <br />
      </div>
    </div>
   <div class="container">

        <div class="form-group row">
            <div class="col">
                <div class="form-group">
                    <label for="farmerName">FarmerName :</label>
                    <input type="text" v-model="farmer.farmerName" class="form-control" id="farmerName" placeholder="Enter farmerName" name="farmerName">
                </div>
            </div>
            <div class="col">
                <div class="form-group">
                    <label for="farmerAge">FarmerAge:</label>
                    <input type="text" v-model="farmer.farmerAge" class="form-control" id="farmerAge" placeholder="Enter farmerAge" name="farmerAge">
                </div>
            </div>
        </div>
        
      <div class="form-group row">
        <div class="col">
          <div class="form-group">
            <label for="farmerPicture">Upload Image:</label>
            <UploadImage
              id="farmerPicture"
              name="farmerPicture"
              ref="farmerPicture"
            />
          </div>
        </div>
      </div>
      <div class="form-group row">
            <div class="col">
                <div class="form-group">
                    <label for="farmerAddress">FarmerAddress:</label>
                    <textarea v-model="farmer.farmerAddress" class="form-control" id="farmerAddress" placeholder="Enter Description" rows="3"></textarea>

                </div>
            </div>
        </div>

      <button class="btn btn-primary" v-on:click="SaveBook()">Save</button
      >&nbsp;
      <button class="btn btn-danger" v-on:click="Cancel()">Cancel</button>
    </div>
    <br /><br />
  </div>
</template>

<script>
import UploadImage from "./UploadImage.vue";
import axios from "axios";
//import moment from "moment";
export default {
  name: "AddFarmer",
  components: {
    UploadImage,
  },
  data() {
    return {
      accessToken:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzY3OTQ3OTQsImV4cCI6MTYzNjc5ODM5NH0.6-tdIRKfP8SlchNrir21Lys22hWxPQ1aGuJNsatxG0Y",
      farmer: {
        farmerName: "",
        farmerAddress: "",
        farmerAge: 0,
        farmerPicture : "",
      },
    };
  },
  methods: {
    async SaveBook() {
      if (confirm("Do you want to save this farmer?")) {

        let farmerPicture = await this.$refs.farmerPicture.getFileName();

        if ((await farmerPicture) !== "") {
          this.farmer.farmerPicture = await farmerPicture;
          await this.$refs.farmerPicture.UploadImage();
        }

        await axios.post(this.$apiUrl + "farmer", this.farmer, {
          headers: { Authorization: `bearer ${this.accessToken}` },
        });
        await this.$router.push("/farmers");
      }
    },
    Cancel() {
      if (confirm("Do you want to cancel adding this farmer?")) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.book-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

label {
  /* Other styling... */
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
}
</style>
