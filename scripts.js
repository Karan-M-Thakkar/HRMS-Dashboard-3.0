const dashboardApp = angular.module("dashboardApp", []);
dashboardApp.controller("dashboardCtrl", function ($scope, $log) {
  $log.info("Controller loaded successfully!");

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
      ],
    },
    {
      category: "Prod & Proj Planning",
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
      category: "General",
      modules: [
        "Direct Reportee Details",
        "HRIS",
        "Policy Documents",
        "Calendar Automation",
        "Organization Tree",
      ],
    },
    {
      category: "Master Config",
      modules: ["Masters", "Security Masters"],
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
      category: "Feedback",
      modules: ["VOC"],
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
            "galleryName": "Lunch with CEO @ Singapore",
            "thumbnailUrl": "https://www.yammer.com/api/v1/uploaded_files/1525452627968/preview/?client_application_id=40443904&fallback_to_icon=false&file_type=image&network_id=243901&storage=AZURE&uid=1020258631680",
            "redirectionLink": "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMjAxNDA5ODQzOTM0MDAzMiJ9",
            "status": "active"
        },
        {
            "galleryName": "Training fuels performance!",
            "thumbnailUrl": "https://www.yammer.com/api/v1/uploaded_files/1513593905152/preview/?client_application_id=40443904&fallback_to_icon=false&file_type=image&network_id=243901&storage=AZURE&uid=1020258631680",
            "redirectionLink": "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMTk5NjgzMjI5MDc5OTYxNiJ9",
            "status": "active"
        },
        {
            "galleryName": "HIS GA dev team members at office",
            "thumbnailUrl": "https://www.yammer.com/api/v1/uploaded_files/1517140647936/preview/?client_application_id=40443904&fallback_to_icon=false&file_type=image&network_id=243901&storage=AZURE&uid=1020258631680",
            "redirectionLink": "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMjAwMDcyODQ4ODY1Njg5NiJ9",
            "status": "active"
        },
        {
          "galleryName": "Virtual Diwali Celebration glimpses",
          "thumbnailUrl": "https://www.yammer.com/api/v1/uploaded_files/1498378919936/version/1519748628480/large_preview/?client_application_id=40443904&fallback_to_icon=false&file_type=image&network_id=243901&storage=AZURE&uid=1020258631680",
          "redirectionLink": "https://web.yammer.com/main/org/napierhealthcare.com/threads/eyJfdHlwZSI6IlRocmVhZCIsImlkIjoiMTk3NjY2MjM1MjU0Mzc0NCJ9",
          "status": "active"
      }
    ]

  $scope.getFormattedMonth = function(dateString) {
    const formatter = new Intl.DateTimeFormat('en', { month: 'short' })
    return formatter.format(new Date(dateString));
  }

  $scope.getFormattedDate = function(dateString) {
    return new Date(dateString).getDate();
  };

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

  $scope.redirectToNewsOrEvent = function(redirectionLink) {
    window.open(redirectionLink);
  }

});
