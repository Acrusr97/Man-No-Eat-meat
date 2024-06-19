

class LogoutContainer {
    constructor() {
      this.onInit();
    }
  
    onInit() {
      CustomLocalStorageService.removeSpecificItem("token");
    }
  }
  
  export default LogoutContainer;