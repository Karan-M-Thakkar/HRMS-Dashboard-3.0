const dashboardAdminApp = angular.module("dashboardAdminApp", [
  "ngAnimate",
  "ngSanitize",
  "ui.bootstrap",
  "ui.grid"
]);

dashboardAdminApp.controller(
  "DashboardAdminController",
  function ($scope, $log, $http, $timeout) {
    $log.log("DashboardAdminController loaded successfully!");
    $scope.formData = {};
    $scope.formData.activeFormType = "news";
    $scope.searchType = "news";
    $scope.formMode = "create";
    $scope.fromDate = null;
    $scope.toDate = null;
    $scope.formData.expiryDate = null;
    $scope.formData.eventDate = null;
    $scope.formData.status = "active";
    $scope.submitAttempted = false;
    $scope.formData.title = '';
    $scope.formData.description = '';
    $scope.formData.thumbnailURL = '';
    $scope.formData.redirectionURL = '';
    $scope.searchData = [];

    $scope.fromDateOptions = {};
    $scope.toDateOptions = {};
    $scope.expiryDateOptions = {};
    $scope.eventDateOptions = {};

    $scope.searchGridOptions = {
      enableSorting: true,
      enableHorizontalScrollbar: false,
      enableColumnMenus: false,
      columnDefs: [
        { name: 'Type',
          field: 'type',
          width: '96'
        },
        { name: 'Title',
          field: 'title',
          width: '272'
        },
        { name: 'Description',
          field: 'description',
          width: '*',
          cellToolTip: function(row) {
            return row.entity.description
          }
        },
        { name: 'Status',
          field: 'status',
          width: '96'
        },
        { name: 'Action',
          cellTemplate: '<div class="edit-icon-wrapper"><img src="../images/pencil.png" alt="" srcset=""></div>',
          width: '80',
          'enableSorting': false
        }
      ],
      onRegisterApi: function( gridApi ) {
        $scope.searchGridApi = gridApi;
      }
    };

    $scope.searchGridOptions.data = [
      {
          "dashboardDataSeqId": 1,
          "type": "event",
          "itemDate": 1669141800000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": null,
          "title": "CCO & ICIO Townhall",
          "description": "Briefing on Strategic Business Focus for CCO and ICIO",
          "redirectionUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODVhMzAyNjQtN2I5Mi00YjQwLWE0NTEtYzc5MjY4N2NhY2U4%40thread.v2/0?context=%7b%22Tid%22%3a%22fbefa5de-8192-4522-b70b-e765e95acc5d%22%2c%22Oid%22%3a%224d09e04e-598f-47b8-b0f7-c9bf99d856b2%22%7d",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 2,
          "type": "news",
          "itemDate": 1669228200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669180834/ceo-avatar_qykw4n.jpg",
          "title": "Leader's Voice",
          "description": "See what our CEO has to say to all employees",
          "redirectionUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669180834/ceo-avatar_qykw4n.jpg",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 3,
          "type": "event",
          "itemDate": 1669314600000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": null,
          "title": "Orientation on POSH at Work",
          "description": "POSH Law (Sexual Harassment of Women at Workplace Act 2013) mandates every Employer to provide a safe working environment at the workplace.",
          "redirectionUrl": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZThlY2QwM2EtMmUxNy00MWRmLWEwNzQtZjgxYjc4ZGY1ODg0%40thread.v2/0?context=%7b%22Tid%22%3a%22fbefa5de-8192-4522-b70b-e765e95acc5d%22%2c%22Oid%22%3a%22ee572cd9-8ca4-4143-8c11-b136db485816%22%7d",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 4,
          "type": "event",
          "itemDate": 1669487400000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669181076/pexels-leeloo-thefirst-7163955_ydrra8.jpg",
          "title": "Enroll for Parental Insurance",
          "description": "A parental insurance policy covers pre-existing diseases, albeit with a waiting period of 24 to 48 months.",
          "redirectionUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669181076/pexels-leeloo-thefirst-7163955_ydrra8.jpg",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 5,
          "type": "news",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669181153/pexels-andrea-piacquadio-3760067_wlzhky.jpg",
          "title": "New Client - APIC",
          "description": "We've onboarded new client with our organizations, get to know about them here.",
          "redirectionUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669181153/pexels-andrea-piacquadio-3760067_wlzhky.jpg",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 6,
          "type": "gallery",
          "itemDate": 1669228200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669270422/WhatsApp_Image_2022-11-21_at_11.26.31_AM_hfsdip.jpg",
          "title": "Lunch with CEO @ Singapore",
          "description": null,
          "redirectionUrl": "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMjAxNDA5ODQzOTM0MDAzMiJ9",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 7,
          "type": "gallery",
          "itemDate": 1669314600000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669270384/32cee1f7-5586-4b2a-8d9d-46cb35d77728_l8axik.jpg",
          "title": "Training fuels performance!",
          "description": null,
          "redirectionUrl": "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMTk5NjgzMjI5MDc5OTYxNiJ9",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 8,
          "type": "gallery",
          "itemDate": 1669487400000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1669270385/HIS_GA_Team_iwyvib.jpg",
          "title": "HIS GA dev team members at office",
          "description": null,
          "redirectionUrl": "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMjAwMDcyODQ4ODY1Njg5NiJ9",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 9,
          "type": "linkedIn",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://www.linkedin.com/embed/feed/update/urn:li:share:7004344112762015746",
          "title": null,
          "description": null,
          "redirectionUrl": null,
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 10,
          "type": "carousel",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1671083089/banner-carousel-slide-1_nr467c.jpg",
          "title": null,
          "description": null,
          "redirectionUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 11,
          "type": "carousel",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1671083089/banner-carousel-slide-2_s5h2vz.jpg",
          "title": null,
          "description": null,
          "redirectionUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 12,
          "type": "carousel",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://res.cloudinary.com/karanthakkar/image/upload/v1671083089/banner-carousel-slide-3_ifklsq.jpg",
          "title": null,
          "description": null,
          "redirectionUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 13,
          "type": "cultureTab",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "title": "Work Culture",
          "description": "Welcome to the Napier Family!!\r\n\r\nA well know brand in healthcare IT industry in APAC, SEA, India and Middle East region.\r\nWe are a startup which is 25 years old. Seems contradicting? Wait!!\r\n\r\nWe have been serving healthcare industry with our legacy solution for more than 25 years now. However, at the heart, we are a startup with leaders from strong clinical, tech and business background embarking on to create intelligent IT solution for efficient healthcare delivery\r\n\r\nWith a new business model we are creating a portfolio of products to support Hospitals, Nursing homes, Medical board and Homecare services leveraging cloud, AI and analytics wherever possible.\r\n\r\nNapierites takes pride in creating something which directly impacts the way services are delivered by secondary and tertiary healthcare providers. Making a difference in the life of our end consumers - doctors and patients are the drivers of our momentum.\r\n\r\nNapier is committed to creating a diverse environment. It is our policy to provide equal opportunity to all people without regard to race, color, religion, national origin, ancestry, marital status, veteran status, age, disability, pregnancy, genetic information, citizenship status, sex, sexual orientation, gender identity or any other legally protected category.\r\n\r\nWe are eager to push the boundaries of our industry, and we encourage our employees to share their ideas, take initiative and be accountable for their work.\r\n\r\nWe are excited to have you as part of our incredible journey!!",
          "redirectionUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 14,
          "type": "cultureTab",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "title": "DNA",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris.",
          "redirectionUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 15,
          "type": "cultureTab",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "title": "Stratergy",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut. Ultrices eros in cursus turpis massa tincidunt. Tristique sollicitudin nibh sit amet commodo. Diam maecenas sed enim ut sem viverra aliquet eget. Maecenas pharetra convallis posuere morbi leo. Et tortor consequat id porta nibh venenatis cras sed felis. Placerat duis ultricies lacus sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut. Ultrices eros in cursus turpis massa tincidunt. Tristique sollicitudin nibh sit amet commodo. Diam maecenas sed enim ut sem viverra aliquet eget. Maecenas pharetra convallis posuere morbi leo. Et tortor consequat id porta nibh venenatis cras sed felis. Placerat duis ultricies lacus sed.",
          "redirectionUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 16,
          "type": "cultureTab",
          "itemDate": 1669660200000,
          "expiryDate": 1672597800000,
          "thumbnailUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "title": "Vision",
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut.",
          "redirectionUrl": "https://www.linkedin.com/company/napierhealthcare/",
          "status": "active",
          "createdOn": 1671108303143,
          "createdBy": 1,
          "editedOn": null,
          "editedBy": null
      },
      {
          "dashboardDataSeqId": 19,
          "type": "carousel",
          "itemDate": 1671463074683,
          "expiryDate": 4102425000000,
          "thumbnailUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qYyd3-O0fHbJBtJWPyyOI1hjSQtDeDbH9A&usqp=CAU",
          "title": "",
          "description": "",
          "redirectionUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0qYyd3-O0fHbJBtJWPyyOI1hjSQtDeDbH9A&usqp=CAU",
          "status": "active",
          "createdOn": 1671463074693,
          "createdBy": 129198,
          "editedOn": null,
          "editedBy": null
      }
    ];

    $scope.fromDatePopup = {
      opened: false,
    };

    $scope.toDatePopup = {
      opened: false,
    };

    $scope.expiryDatePopup = {
      opened: false,
    };

    $scope.eventDatePopup = {
      opened: false,
    };

    $scope.openFromDatepicker = function () {
      $scope.fromDatePopup.opened = true;
    };

    $scope.openToDatepicker = function () {
      $scope.toDatePopup.opened = true;
    };

    $scope.openExpiryDatepicker = function () {
      $scope.expiryDatePopup.opened = true;
    };

    $scope.openEventDatepicker = function () {
      $scope.eventDatePopup.opened = true;
    };

    $scope.restrictToDate = () => {
      $scope.toDateOptions = {
        minDate: new Date($scope.fromDate),
      };
    };

    $scope.redirectToDashboard = () => {
      window.open("../../index.html", "_self");
    };

    $scope.save = () => {
      $scope.submitAttempted = true;
      $log.log($scope.createNewDataForm.$valid);
    };

    $scope.clear = function () {
      $scope.formData.title = '';
      $scope.formData.description = '';
      $scope.formData.thumbnailURL = '';
      $scope.formData.redirectionURL = '';
      $scope.formData.expiryDate = null;
      $scope.formData.eventDate = null;
      $scope.formData.status = 'active';
      $scope.submitAttempted = false;
    }
  }
);

dashboardAdminApp.filter("capitalize", function () {
  return function (input) {
    return angular.isString(input) && input.length > 0
      ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase()
      : input;
  };
});