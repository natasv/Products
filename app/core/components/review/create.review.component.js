module.exports = {
   bindings:     {
     reviews: '=',
     productId: '<'
   },
   controller:   CreateReviewController,
   templateUrl:  ['App', function (App) {
     return App.template('core/components/review/create-review');
   }]
};

CreateReviewController.$inject = ['ReviewsModel'];

function CreateReviewController (ReviewsModel) {

   var _this = this;

   this.review = {
     id: this.productId,
     rate: '5',
     text: 'test'
   };

   this.create = create;

   function create() {

     createRequest(this.review).then(function(res){
       console.log(res)
       _this.reviews.unshift({});
     });

   }

   function createRequest(review) {
     return ReviewsModel.postReview(review).$promise;
   }


}
