import React from "react";

function Jeju({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="제주"
      className="area"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      strokeMiterlimit="1"
      points="50.649,1091.399 53.907,1090.633   54.099,1090.633 55.44,1090.054 56.016,1090.054 56.399,1090.249 56.59,1090.054 56.59,1089.866 56.59,1089.482 56.782,1089.671   57.549,1088.904 58.124,1088.904 59.848,1087.754 60.615,1087.754 61.957,1086.8 62.531,1085.838 63.681,1085.454 64.831,1085.454   65.214,1085.838 66.556,1086.221 68.281,1085.649 69.814,1085.838 70.964,1084.883 76.713,1084.5 76.905,1084.5 77.863,1084.116   78.055,1083.733 78.247,1083.733 79.588,1084.116 80.163,1083.921 80.354,1083.733 80.354,1083.35 80.929,1082.771 82.267,1081.816   82.462,1082.005 83.417,1082.388 84.762,1082.005 86.1,1081.621 86.483,1081.621 86.675,1081.434 87.058,1081.434 87.058,1081.621   88.017,1081.434 88.591,1082.005 88.783,1081.621 88.783,1081.434 88.783,1081.05 88.591,1081.05 88.783,1080.283 90.125,1078.75   90.125,1078.555 90.508,1077.983 91.083,1077.983 91.85,1078.367 91.658,1078.938 91.658,1079.321 91.85,1079.321 92.424,1078.555   93.191,1079.134 93.383,1079.9 93.574,1079.9 93.766,1079.705 93.958,1079.9 94.341,1080.667 94.533,1080.472 94.916,1080.088   95.874,1079.517 96.065,1079.134 96.449,1078.75 97.407,1078.938 97.599,1079.134 97.982,1079.134 98.365,1079.321 99.132,1078.75   99.898,1078.75 102.582,1078.172 103.157,1077.983 103.348,1078.367 103.731,1077.788 104.69,1077.217 105.265,1077.021   106.031,1076.45 106.031,1076.834 106.606,1077.217 107.181,1077.217 107.756,1077.021 107.948,1077.788 107.948,1077.788   108.139,1077.217 108.331,1077.217 108.714,1077.217 108.714,1077.217 109.289,1077.021 110.056,1077.217 110.248,1077.217   110.631,1077.601 111.397,1076.834 111.589,1076.067 111.972,1075.872 112.164,1075.872 112.931,1075.872 114.081,1076.255   115.23,1075.872 115.422,1076.067 115.805,1076.255 116.572,1077.021 117.338,1077.217 117.53,1077.405 117.722,1077.983   117.913,1077.983 118.296,1077.983 118.488,1077.601 119.83,1077.601 121.171,1076.834 123.088,1077.217 123.279,1077.788   123.279,1078.172 123.471,1078.367 123.471,1078.555 123.854,1080.283 123.854,1080.472 124.238,1080.667 124.238,1081.238   125.196,1081.621 125.388,1081.816 125.771,1081.816 125.962,1082.005 125.962,1082.2 125.771,1082.583 125.962,1082.388   126.729,1082.771 126.729,1082.771 127.496,1082.771 127.687,1083.35 127.687,1083.538 127.879,1083.35 128.454,1083.538   128.646,1083.538 128.646,1083.921 128.646,1084.305 128.646,1084.305 128.833,1084.5 129.029,1084.5 129.412,1084.305   129.795,1084.5 129.983,1084.116 130.367,1083.538 130.75,1083.538 131.517,1083.538 131.712,1083.538 132.862,1083.538   133.049,1083.538 134.012,1084.116 134.395,1083.921 134.966,1084.116 135.349,1084.5 135.541,1084.688 135.732,1084.688   136.116,1084.688 136.116,1084.883 136.691,1084.5 136.882,1084.883 137.458,1086.033 137.266,1086.221 136.499,1086.416   136.882,1086.604 136.116,1087.566 136.116,1087.566 137.841,1087.949 138.416,1088.333 138.607,1088.333 138.799,1088.716   138.799,1089.287 138.991,1089.671 138.799,1090.054 138.416,1091.782 138.799,1092.166 138.991,1092.166 139.182,1092.354   139.182,1092.549 139.374,1092.933 138.991,1093.12 138.799,1093.12 138.224,1092.933 138.032,1093.12 137.841,1093.12   137.649,1092.933 137.458,1093.12 137.266,1092.933 137.074,1092.736 136.882,1093.12 136.499,1094.082 137.649,1094.466   138.607,1095.803 138.991,1095.611 139.374,1095.611 139.565,1095.42 140.524,1095.995 140.715,1095.611 140.907,1095.611   141.099,1095.611 140.524,1096.378 141.099,1096.569 141.291,1095.995 141.291,1095.995 142.44,1095.611 142.632,1095.611   142.44,1095.995 142.824,1096.569 143.207,1097.72 143.782,1098.103 144.165,1098.486 144.356,1098.678 144.74,1099.253   144.356,1099.636 143.015,1099.444 142.824,1099.253 142.632,1098.869 141.865,1098.869 141.674,1098.869 141.291,1099.828   141.291,1100.211 140.715,1100.786 140.332,1100.978 140.715,1101.553 140.141,1101.744 140.141,1102.128 140.332,1102.128   140.715,1102.128 140.715,1103.853 142.44,1104.812 142.824,1104.812 142.632,1105.193 142.44,1105.386 142.057,1105.769   142.057,1106.152 141.291,1106.535 140.715,1106.152 140.524,1106.152 140.141,1105.577 140.141,1105.193 140.524,1104.619   140.141,1104.044 139.182,1104.427 139.374,1105.002 139.374,1105.386 139.182,1105.769 138.991,1105.96 138.991,1106.344   138.799,1106.919 138.032,1108.835 137.841,1108.835 137.649,1109.985 137.074,1110.368 136.882,1110.56 136.882,1110.752   137.074,1110.752 137.074,1110.943 137.074,1111.326 137.266,1111.519 137.458,1112.478 137.458,1112.859 137.266,1113.243   135.924,1113.817 134.583,1114.01 134.395,1114.393 134.199,1114.584 133.245,1114.776 131.712,1117.076 130.367,1118.992   130.75,1119.567 130.562,1119.759 130.75,1120.909 130.179,1121.672 128.454,1123.783 128.454,1124.167 128.07,1124.55   127.496,1125.121 127.112,1124.934 126.729,1125.121 126.154,1126.654 126.729,1127.038 126.729,1127.038 125.579,1129.337   125.004,1130.104 122.705,1131.449 118.872,1131.833 118.105,1132.021 113.505,1132.403 112.739,1132.599 112.355,1132.982   112.164,1133.554 112.164,1134.516 110.631,1135.282 110.631,1135.282 110.248,1135.47 110.056,1135.665 109.864,1135.665   109.289,1135.854 109.289,1136.432 109.289,1136.432 109.098,1136.815 108.522,1137.003 108.331,1137.198 108.331,1137.198   107.373,1137.387 107.181,1137.198 106.606,1136.815 106.415,1136.62 106.415,1136.62 106.223,1137.003 105.073,1137.003   105.073,1137.003 104.498,1137.582 104.115,1137.387 103.923,1137.387 103.731,1137.771 101.815,1138.153 101.432,1138.153   101.24,1138.349 100.665,1138.731 100.282,1138.731 99.132,1138.92 96.641,1138.731 96.641,1138.731 96.449,1139.498   95.299,1138.92 94.916,1138.731 93.958,1139.303 93.574,1139.303 93.958,1138.92 93.766,1138.536 93.383,1139.115 93,1138.92   93,1138.92 92.808,1139.303 92.041,1138.92 91.466,1139.303 90.508,1139.498 90.125,1140.453 88.591,1141.986 88.208,1142.369   88.208,1142.369 87.633,1142.182 87.633,1142.753 86.867,1142.563 86.483,1143.331 85.529,1145.053 85.146,1145.053   84.762,1145.053 84.184,1145.244 82.65,1145.819 82.462,1146.011 82.079,1146.011 81.884,1146.011 81.5,1145.819 80.354,1144.478   79.779,1144.478 79.588,1144.478 79.396,1144.669 79.013,1144.478 78.438,1144.286 77.48,1144.286 77.288,1144.478 77.288,1145.819   76.905,1146.011 76.713,1146.011 76.33,1145.627 76.138,1145.437 75.755,1145.244 75.563,1144.86 75.563,1144.478 75.372,1145.053   75.372,1145.627 75.372,1146.011 75.18,1145.819 75.18,1145.437 74.988,1145.437 74.605,1145.437 74.414,1145.437 74.222,1145.244   73.455,1145.437 72.305,1145.244 72.114,1145.244 71.922,1145.053 71.347,1145.053 71.155,1145.244 70.772,1145.627   70.772,1145.627 69.622,1145.437 69.239,1145.244 68.473,1145.053 68.281,1145.627 68.089,1145.819 67.514,1146.202   67.323,1146.394 66.556,1147.16 66.364,1147.16 65.981,1147.353 65.214,1147.544 64.831,1147.544 64.64,1147.544 64.256,1147.735   64.064,1147.353 63.49,1147.353 63.106,1147.16 62.531,1147.353 62.34,1147.735 61.765,1147.927 60.423,1149.077 59.273,1148.886   58.89,1148.119 58.89,1147.927 58.315,1147.735 57.932,1147.353 57.74,1147.16 57.549,1146.777 56.974,1145.244 56.59,1145.244   56.016,1145.053 55.824,1145.053 55.632,1145.244 54.482,1146.011 54.099,1145.819 53.141,1146.394 53.141,1146.777   52.949,1146.777 52.757,1146.777 52.374,1146.777 52.374,1146.586 52.183,1146.202 51.607,1146.202 51.033,1145.627   50.841,1145.437 50.458,1145.244 49.5,1144.669 49.116,1144.478 47.966,1144.478 47.583,1144.478 47.392,1144.478 46.625,1145.053   46.242,1145.437 45.667,1145.627 45.283,1145.819 44.325,1146.394 44.133,1146.777 43.75,1146.777 43.367,1146.394 42.6,1146.777   42.025,1147.16 41.642,1147.353 39.726,1146.202 36.851,1145.819 34.935,1146.202 34.935,1146.202 35.318,1146.011 34.935,1145.819   35.13,1145.244 34.935,1145.053 34.363,1144.86 34.363,1144.86 33.98,1144.86 33.597,1145.053 33.401,1145.244 32.635,1145.244   32.063,1145.627 32.063,1145.627 31.872,1145.819 31.68,1146.394 30.914,1146.586 30.722,1147.16 30.722,1147.353 30.53,1147.735   29.956,1147.544 29.956,1147.544 29.38,1147.735 28.997,1148.312 28.039,1150.802 27.847,1150.993 27.656,1151.568 27.656,1151.76   28.23,1153.677 25.164,1153.677 25.164,1153.677 24.973,1153.484 23.823,1154.635 23.631,1154.635 22.673,1154.251 22.673,1154.251   22.481,1154.06 22.098,1153.868 21.906,1152.91 22.098,1151.185 21.714,1151.377 21.331,1151.185 21.14,1151.76 20.948,1151.377   19.798,1150.61 19.798,1150.035 19.415,1149.651 19.415,1149.46 18.648,1148.886 18.457,1148.502 18.265,1148.502 17.882,1147.735   17.307,1146.777 17.115,1146.394 16.157,1145.819 15.965,1145.437 15.39,1144.86 14.624,1144.478 14.432,1144.286 13.09,1144.478   12.707,1144.094 11.749,1143.711 11.366,1143.521 10.982,1143.331 10.599,1142.948 10.024,1142.563 10.024,1142.369 9.641,1142.182   9.833,1141.798 9.641,1141.798 8.875,1141.415 8.299,1141.031 8.108,1140.836 7.916,1140.647 7.533,1140.069 7.533,1139.882   7.533,1139.687 6.958,1138.731 6.575,1138.536 6.575,1138.153 6.191,1137.965 5.808,1137.771 5.616,1137.198 5.425,1135.665   5.042,1135.47 4.466,1135.282 4.083,1135.087 3.892,1133.554 4.083,1132.982 4.658,1132.403 4.85,1132.216 5.042,1132.216   5.042,1131.637 4.658,1131.449 4.466,1130.683 4.466,1130.487 4.466,1130.104 4.658,1129.721 4.85,1129.721 4.85,1128.954   5.042,1128.767 5.042,1127.233 4.658,1127.233 4.275,1126.85 4.466,1125.316 4.275,1125.121 4.083,1124.934 4.275,1124.354   4.083,1123.783 4.466,1123.588 5.042,1123.4 5.042,1122.821 5.425,1122.055 5.808,1121.867 6,1121.867 6.191,1122.055   6.766,1121.672 6.958,1121.867 6.958,1122.055 7.149,1121.672 7.533,1121.288 7.533,1121.288 7.533,1120.143 7.533,1120.143   7.533,1119.95 7.725,1119.376 8.683,1118.609 9.066,1118.417 9.833,1118.226 10.599,1118.034 10.982,1117.843 11.174,1117.843   11.557,1117.843 11.557,1117.65 11.749,1117.268 11.94,1117.268 12.324,1116.501 12.516,1116.117 12.899,1115.926 13.474,1115.926   14.049,1115.159 14.049,1115.159 14.432,1114.01 15.007,1113.243 15.39,1112.668 15.582,1112.668 15.965,1112.478 16.923,1112.668   17.307,1112.478 17.69,1112.093 17.69,1111.901 18.648,1111.71 18.648,1111.519 18.648,1111.326 18.648,1110.56 19.032,1110.368   19.415,1110.368 20.182,1109.985 20.564,1108.644 20.948,1108.644 21.14,1108.26 20.756,1107.493 20.948,1107.877 21.331,1108.068   21.714,1107.687 21.906,1107.493 21.523,1108.26 22.098,1107.687 22.481,1106.919 21.906,1106.152 21.714,1107.302 21.523,1105.96   21.714,1105.193 22.098,1105.193 22.481,1105.193 22.481,1105.002 22.098,1104.812 22.29,1104.044 22.29,1103.086 23.439,1102.702   24.397,1102.894 24.589,1102.702 25.164,1101.553 26.314,1101.169 26.697,1101.169 27.272,1101.36 27.464,1100.978 28.23,1100.978   29.189,1100.402 29.572,1100.402 30.339,1099.444 30.53,1099.253 30.722,1098.869 30.722,1098.486 31.105,1098.103 31.105,1097.911   30.914,1097.72 30.722,1096.953 30.914,1096.762 31.297,1096.378 32.255,1096.378 32.447,1096.378 33.213,1096.378 34.168,1095.995   34.747,1096.187 35.701,1096.569 36.28,1096.187 36.468,1095.803 36.663,1095.803 37.234,1095.611 37.617,1095.231 38.576,1095.036   38.576,1094.849 38.767,1094.466 39.342,1094.082 39.726,1093.887 40.492,1094.082 41.642,1093.887 42.025,1093.887   42.409,1093.503 42.983,1093.12 43.75,1092.736 43.942,1092.354 44.133,1092.166 44.517,1091.97 45.667,1092.354 46.816,1093.12   47.774,1092.736 48.541,1092.549 48.924,1091.97 50.458,1091.782 "
      transform="translate(106.95522,19.462687)"
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "gray",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Jeju;
