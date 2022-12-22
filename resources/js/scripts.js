const dashboardApp = angular.module("dashboardApp", []);
dashboardApp.controller("dashboardCtrl", function ($scope, $log, $timeout, $sce) {
  $log.info("Controller loaded successfully!");

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );

  $scope.showApiCallLoader = true;
  $timeout(function () {
    $scope.showApiCallLoader = false;
  }, 2000);
  
  $scope.linkedInData = [
    {
      dashboardDataSeqId: 9,
      type: "linkedIn",
      itemDate: 1669660200000,
      expiryDate: 1672597800000,
      thumbnailUrl:
        '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7004344112762015746" height="640" width="100%" frameborder="0" allowfullscreen="true" title="Embedded post"></iframe>',
      title: null,
      description: null,
      redirectionUrl: null,
      status: "active",
      createdOn: 1671108303143,
      createdBy: 1,
      editedOn: null,
      editedBy: null,
    },
    {
      dashboardDataSeqId: 9,
      type: "linkedIn",
      itemDate: 1669660200000,
      expiryDate: 1672597800000,
      thumbnailUrl:
        '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7001074296357867520" height="560" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>',
      title: null,
      description: null,
      redirectionUrl: null,
      status: "active",
      createdOn: 1671108303143,
      createdBy: 1,
      editedOn: null,
      editedBy: null,
    },
  ];

  $scope.categories = [
    {
      category: "HRMS",
      modules: [
        "Approve Probation Confirmation",
        "Approve Resignation/Probation",
        "Employee Probation",
        "Record Resignation",
        "Onboard",
        "New Hire Survey",
        "HRF",
        "Employee Exit Interview",
        "HRIS",
      ],
    },
    {
      category: "Product & Project",
      modules: ["QGate Management", "PRC", "PR & PO"],
    },
    {
      category: "Performance",
      modules: [
        "COBC Quiz",
        "RTM",
        "RTM Report",
        "RTM Admin",
        "RTM Resource Manager",
        "Performance Review System(PRS)",
        "Productivity Tracking",
      ],
    },
    {
      category: "Leave & Attendance",
      modules: [
        "Apply Leave",
        "Approve Attendance Regularization",
        "Approve Leave",
        "Attendance",
        "Leave Management",
      ],
    },
    {
      category: "Reports",
      modules: [
        "Reports",
        "COBC & CGLR Report",
        "Finance Reports",
        "Finance Dashboard",
      ],
    },
    {
      category: "Master",
      modules: ["Masters", "Security Masters"],
    },
  ];

  $scope.eventAndNewsData = [
    {
      type: "event",
      date: "2022-11-23 00:00:00.000",
      expiryDate: "2022-11-23 23:59:59.999",
      name: "CCO & ICIO Townhall",
      description: "Briefing on Strategic Business Focus for CCO and ICIO",
      redirectionLink:
        "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ODVhMzAyNjQtN2I5Mi00YjQwLWE0NTEtYzc5MjY4N2NhY2U4%40thread.v2/0?context=%7b%22Tid%22%3a%22fbefa5de-8192-4522-b70b-e765e95acc5d%22%2c%22Oid%22%3a%224d09e04e-598f-47b8-b0f7-c9bf99d856b2%22%7d",
      status: "active",
      backgroundColorClass: "bg-primary",
    },
    {
      type: "news",
      date: "2022-11-24 00:00:00.000",
      expiryDate: "2022-11-30 23:59:59.999",
      thumbnailLink:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669180834/ceo-avatar_qykw4n.jpg",
      name: "Leader's Voice",
      description: "See what our CEO has to say to all employees",
      redirectionLink:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669180834/ceo-avatar_qykw4n.jpg",
      status: "active",
    },
    {
      type: "event",
      date: "2022-11-25 00:00:00.000",
      expiryDate: "2022-11-25 23:59:59.999",
      name: "Orientation on POSH at Work",
      description:
        "POSH Law (Sexual Harassment of Women at Workplace Act 2013) mandates every Employer to provide a safe working environment at the workplace.",
      redirectionLink:
        "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZThlY2QwM2EtMmUxNy00MWRmLWEwNzQtZjgxYjc4ZGY1ODg0%40thread.v2/0?context=%7b%22Tid%22%3a%22fbefa5de-8192-4522-b70b-e765e95acc5d%22%2c%22Oid%22%3a%22ee572cd9-8ca4-4143-8c11-b136db485816%22%7d",
      status: "active",
      backgroundColorClass: "bg-success",
    },
    {
      type: "event",
      date: "2022-11-27 00:00:00.000",
      expiryDate: "2022-11-30 23:59:59.999",
      thumbnailLink:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669181076/pexels-leeloo-thefirst-7163955_ydrra8.jpg",
      name: "Enroll for Parental Insurance",
      description:
        "A parental insurance policy covers pre-existing diseases, albeit with a waiting period of 24 to 48 months.",
      redirectionLink:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669181076/pexels-leeloo-thefirst-7163955_ydrra8.jpg",
      status: "active",
      backgroundColorClass: "bg-danger",
    },
    {
      type: "news",
      date: "2022-11-29 00:00:00.000",
      expiryDate: "2022-11-30 23:59:59.999",
      thumbnailLink:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669181153/pexels-andrea-piacquadio-3760067_wlzhky.jpg",
      name: "New Client - APIC",
      description:
        "We've onboarded new client with our organizations, get to know about them here.",
      redirectionLink:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669181153/pexels-andrea-piacquadio-3760067_wlzhky.jpg",
      status: "active",
    },
  ];

  $scope.galleryData = [
    {
      galleryName: "Lunch with CEO @ Singapore",
      thumbnailUrl:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669270422/WhatsApp_Image_2022-11-21_at_11.26.31_AM_hfsdip.jpg",
      redirectionLink:
        "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMjAxNDA5ODQzOTM0MDAzMiJ9",
      status: "active",
    },
    {
      galleryName: "Training fuels performance!",
      thumbnailUrl:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669270384/32cee1f7-5586-4b2a-8d9d-46cb35d77728_l8axik.jpg",
      redirectionLink:
        "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMTk5NjgzMjI5MDc5OTYxNiJ9",
      status: "active",
    },
    {
      galleryName: "HIS GA dev team members at office",
      thumbnailUrl:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669270385/HIS_GA_Team_iwyvib.jpg",
      redirectionLink:
        "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMjAwMDcyODQ4ODY1Njg5NiJ9",
      status: "active",
    },
    {
      galleryName: "Virtual Diwali Celebration glimpses",
      thumbnailUrl:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1669270385/Slide2_evrp3b.jpg",
      redirectionLink:
        "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMTk3NjY2MjM1MjU0Mzc0NCJ9",
      status: "active",
    },
  ];

  $scope.getFormattedMonth = function (dateString) {
    const formatter = new Intl.DateTimeFormat("en", { month: "short" });
    return formatter.format(new Date(dateString));
  };

  $scope.getFormattedDate = function (dateString) {
    return new Date(dateString).getDate();
  };

  $scope.carouselImagesData = [
    {
      dashboardDataSeqId: 14,
      type: "carousel",
      itemDate: 1671083288337,
      expiryDate: 4102425000000,
      thumbnailUrl:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1671083089/banner-carousel-slide-1_nr467c.jpg",
      title: "",
      description: "",
      redirectionUrl: "https://www.linkedin.com/company/napierhealthcare/",
      status: "active",
      createdOn: 1671083298110,
      createdBy: 129198,
      editedOn: null,
      editedBy: null,
    },
    {
      dashboardDataSeqId: 15,
      type: "carousel",
      itemDate: 1671083338267,
      expiryDate: 4102425000000,
      thumbnailUrl:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1671693431/Banner_tdiuha.jpg",
      title: "",
      description: "",
      redirectionUrl: "https://www.linkedin.com/company/napierhealthcare/",
      status: "active",
      createdOn: 1671083338277,
      createdBy: 129198,
      editedOn: null,
      editedBy: null,
    },
    {
      dashboardDataSeqId: 16,
      type: "carousel",
      itemDate: 1671083357913,
      expiryDate: 4102425000000,
      thumbnailUrl:
        "https://res.cloudinary.com/karanthakkar/image/upload/v1671620255/1a237d08-e04c-4ef9-9bc8-9a151c4cde65_ehe4w9.jpg",
      title: "",
      description: "",
      redirectionUrl: "https://www.linkedin.com/company/napierhealthcare/",
      status: "active",
      createdOn: 1671083357923,
      createdBy: 129198,
      editedOn: null,
      editedBy: null,
    },
  ];

  const visionTabText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut. Ultrices eros in cursus turpis massa tincidunt. Tristique sollicitudin nibh sit amet commodo. Diam maecenas sed enim ut sem viverra aliquet eget. Maecenas pharetra convallis posuere morbi leo. Et tortor consequat id porta nibh venenatis cras sed felis. Placerat duis ultricies lacus sed.";

  const missionTabText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris.";

  const focusTabText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut. Ultrices eros in cursus turpis massa tincidunt. Tristique sollicitudin nibh sit amet commodo. Diam maecenas sed enim ut sem viverra aliquet eget. Maecenas pharetra convallis posuere morbi leo. Et tortor consequat id porta nibh venenatis cras sed felis. Placerat duis ultricies lacus sed.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut. Ultrices eros in cursus turpis massa tincidunt. Tristique sollicitudin nibh sit amet commodo. Diam maecenas sed enim ut sem viverra aliquet eget. Maecenas pharetra convallis posuere morbi leo. Et tortor consequat id porta nibh venenatis cras sed felis. Placerat duis ultricies lacus sed.`;

  const teamTabText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer feugiat scelerisque varius morbi enim. Libero enim sed faucibus turpis in. Scelerisque viverra mauris in aliquam sem fringilla ut.";

  $scope.changeKnowYourNapTab = (tab) => {
    $scope.currentTab = tab;
    switch (tab) {
      case "vision":
        $scope.modalTabText = visionTabText;
        return;
      case "mission":
        $scope.modalTabText = missionTabText;
        return;
      case "focus":
        $scope.modalTabText = focusTabText;
        return;
      case "team":
        $scope.modalTabText = teamTabText;
        return;
      default:
        $scope.modalTabText = visionTabText;
        return;
    }
  };

  $scope.openChatBox = () => {
    $scope.isChatBoxOpened = true;
  };

  $scope.closeChatBox = () => {
    $scope.isChatBoxOpened = false;
  };

  $scope.isChatBoxOpened = false;
  $scope.changeKnowYourNapTab("vision");

  $scope.redirectToNewsOrEvent = function (redirectionLink) {
    window.open(redirectionLink);
  };

  $scope.openDashboardAdmin = () => {
    window.open("resources/views/dashboard.administration.html", "_self");
  };

  /* to implement html string */
  $scope.trustAsHtml = function(str) {
    return $sce.trustAsHtml(str);
  };

  $("body").on("click", function (e) {
    $("[data-bs-toggle=popover]").each(function () {
      // hide any open popovers when the anywhere else in the body is clicked
      if (
        !$(this).is(e.target) &&
        $(this).has(e.target).length === 0 &&
        $(".popover").has(e.target).length === 0
      ) {
        $(this).popover("hide");
      }
    });
  });
});
