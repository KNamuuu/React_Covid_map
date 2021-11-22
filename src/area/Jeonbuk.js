import React from "react";

function Jeonbuk({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="전북"
      className="area"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      strokeMiterlimit="1"
      points="264.128,543.715 265.469,544.29   266.044,544.863 266.044,545.441 266.044,545.629 266.044,545.825 266.236,546.013 266.428,546.013 267.002,546.396   269.302,550.229 269.877,549.658 270.069,549.462 269.877,547.741 269.877,547.162 269.877,546.975 270.26,546.779 270.452,546.396   270.835,546.396 271.027,546.208 271.219,546.013 272.56,544.863 273.327,545.629 273.515,545.629 274.093,546.013 274.281,546.208   274.093,546.975 274.093,547.162 274.093,547.545 274.093,548.891 274.281,549.462 274.665,549.658 274.86,550.229 275.048,550.424   275.243,550.612 275.814,550.995 275.814,551.19 276.01,550.995 276.581,550.808 276.964,550.612 277.16,550.612 277.731,550.808   277.926,550.995 278.31,551.573 278.31,551.573 278.881,551.378 279.076,551.957 279.456,552.528 279.647,552.528 279.839,551.378   280.031,551.378 281.181,551.573 281.372,551.957 281.564,552.341 281.947,552.724 282.331,552.724 282.905,551.957 283.48,552.146   283.672,552.341 284.055,552.911 284.438,552.911 284.822,552.724 285.014,552.724 285.588,552.724 285.78,553.106 285.588,553.679   285.205,553.874 284.822,554.257 285.014,554.828 285.397,555.212 285.588,555.212 285.972,555.407 287.122,555.407   287.888,554.828 288.08,554.828 289.038,554.64 290.188,555.023 290.571,554.444 291.338,553.49 291.721,553.106 292.104,552.528   293.446,552.341 294.212,552.146 294.596,551.957 294.979,551.957 295.938,551.573 296.129,551.378 298.429,550.424   299.579,550.229 300.345,549.658 301.495,549.845 301.688,550.229 302.453,551.19 303.028,551.762 303.028,551.762 303.22,551.957   303.22,552.341 303.411,552.528 304.563,552.911 305.328,555.212 305.328,557.896 305.328,558.278 305.328,558.474 305.712,558.856   306.478,559.239 307.244,559.623 307.819,560.39 308.011,560.577 308.395,560.577 308.586,560.772 308.202,561.345 308.011,561.728   307.819,562.11 308.011,562.494 308.586,562.494 308.969,562.878 308.969,563.839 308.969,563.839 309.161,564.027 309.544,564.606   309.544,564.794 309.735,565.944 309.928,566.327 310.119,567.094 310.694,567.86 311.269,568.052 311.461,568.435 311.461,569.202   311.077,570.159 310.694,570.543 310.119,570.927 309.353,571.31 309.161,571.501 308.202,572.269 307.819,572.46 306.669,572.843   306.669,573.034 306.669,573.609 306.669,574.759 307.053,575.526 307.244,576.101 306.669,576.292 306.286,576.676   306.095,576.868 305.903,577.06 305.903,577.251 305.712,577.634 305.136,577.825 304.563,578.209 304.563,578.209 303.603,577.825   302.837,577.825 302.646,579.934 302.453,580.125 302.262,580.317 301.878,580.892 301.495,581.275 301.304,581.467   301.304,581.658 301.304,581.851 301.304,582.042 301.495,582.617 301.495,582.617 301.304,583.384 300.729,583.767   300.153,584.342 300.153,585.684 299.962,585.875 299.771,586.066 299.579,586.258 299.195,586.258 298.237,586.066   297.854,585.684 297.47,585.684 296.896,585.875 296.704,586.066 296.32,586.45 295.938,587.217 295.554,587.983 295.171,588.366   294.979,588.558 294.788,588.749 293.829,588.941 293.638,588.558 293.254,588.366 293.063,588.558 292.488,588.941   292.104,589.133 291.338,589.324 290.188,589.708 289.996,589.899 289.613,590.091 289.613,590.091 289.421,590.091   289.038,590.282 288.463,591.433 288.463,591.433 288.271,591.624 288.08,591.813 287.888,592.008 287.696,592.391 286.355,592.391   286.163,592.391 285.78,592.579 285.205,592.774 285.014,592.579 284.63,592.391 284.055,591.813 283.864,591.624 282.905,591.241   282.714,591.624 282.522,592.008 282.139,592.579 281.755,593.157 281.947,594.69 281.181,595.841 280.989,596.028 280.605,597.178   280.605,597.562 280.414,597.944 279.264,598.328 278.881,600.244 278.693,600.628 278.31,601.396 277.348,602.161 277.16,602.161   276.964,602.544 276.01,602.544 275.814,602.739 275.243,603.123 275.243,603.123 274.86,603.506 274.477,603.694 274.281,604.077   273.71,604.461 273.515,604.656 273.131,605.228 272.752,605.423 272.177,606.377 272.177,606.377 271.793,606.956 271.793,607.144   271.219,606.956 271.027,606.956 269.877,606.761 269.686,606.956 269.302,607.144 269.11,607.723 268.919,608.677 268.536,609.256   268.728,611.36 268.728,611.556 268.919,613.089 268.919,616.343 268.536,617.876 268.536,618.259 268.536,619.601 268.152,620.559   267.961,620.559 267.578,620.751 267.002,620.942 265.853,622.476 265.086,625.925 263.361,629.566 263.169,630.716   262.403,632.058 262.02,632.441 261.828,633.208 262.403,635.508 262.978,637.615 264.128,639.532 263.936,639.532 262.978,639.532   261.445,640.873 260.87,641.257 260.678,641.257 260.486,641.444 259.528,644.511 259.145,647.577 256.654,650.261 255.887,651.794   256.271,653.139 257.612,654.477 259.72,655.822 259.912,656.205 262.595,658.505 262.595,658.888 262.786,659.271 263.553,660.038   264.128,661.376 264.511,661.954 265.086,662.909 265.853,664.25 266.044,664.634 266.236,664.825 267.194,665.017 267.194,666.934   267.386,667.509 266.619,668.083 266.236,668.275 265.853,668.467 265.469,668.658 265.086,668.85 264.895,670.191 264.895,670.958   264.703,671.149 264.703,672.108 264.703,673.258 265.086,673.449 265.469,674.216 265.853,674.6 266.044,674.791 266.044,675.174   266.619,675.174 267.002,674.982 267.194,674.982 267.386,674.982 268.152,675.174 269.11,675.366 270.26,675.558 270.835,675.94   270.835,676.133 271.027,676.516 270.835,676.899 270.644,676.899 270.452,677.282 270.26,677.474 270.069,677.666 269.877,677.857   269.877,678.815 269.877,679.391 269.686,680.157 269.494,680.349 269.302,681.499 269.11,682.457 268.728,682.84 267.961,683.224   267.769,683.606 267.386,683.99 267.194,684.182 266.619,684.182 265.661,684.564 265.086,684.948 265.086,685.14 264.703,685.715   264.511,686.481 264.128,686.864 264.128,687.248 263.936,687.631 263.553,687.823 263.553,688.011 262.978,688.973 262.595,690.89   262.403,691.46 262.02,691.844 261.636,692.039 261.253,692.227 260.678,692.423 260.486,692.806 260.295,692.993 260.486,693.572   260.486,693.956 260.678,695.293 261.062,696.06 261.253,696.443 261.636,696.639 261.828,696.826 262.403,697.593 262.211,699.321   262.211,699.705 261.828,700.276 261.062,700.659 261.062,700.854 260.87,701.043 260.678,701.238 260.295,701.426 259.912,701.81   259.72,702.005 259.72,702.388 259.528,703.154 259.336,703.154 258.762,703.538 258.378,703.726 257.995,704.109 257.612,704.305   257.42,704.492 257.037,704.688 256.654,704.876 256.079,705.259 254.162,704.876 253.779,704.688 253.396,704.109 253.204,703.726   253.012,703.343 252.246,702.959 251.671,702.576 251.288,702.576 250.521,702.192 249.179,701.426 248.796,701.426   248.604,701.238 248.413,700.088 248.221,699.893 247.263,699.705 246.497,699.321 246.497,699.321 246.305,699.126   246.113,698.938 245.921,698.359 245.538,697.788 245.347,697.593 245.155,697.405 244.963,697.405 244.197,697.21 243.622,696.443   243.238,696.06 243.238,696.06 242.472,695.872 242.28,695.677 242.088,695.488 241.897,695.104 241.322,694.722 240.555,694.339   240.364,694.339 240.172,694.339 239.98,694.526 239.405,694.722 238.831,694.722 238.255,694.526 238.255,694.526 237.297,693.572   237.106,693.377 236.531,693.189 235.956,693.189 234.998,693.572 233.273,694.144 232.314,694.339 231.548,694.339   230.781,693.572 230.781,693.572 230.21,693.76 230.015,693.956 229.444,694.339 229.061,694.526 229.061,694.722 228.677,695.104   227.911,696.06 227.715,696.443 227.144,697.788 226.949,697.977 226.761,698.172 225.994,699.705 225.799,699.893 222.353,705.454   221.969,705.838 218.903,704.492 216.987,703.538 216.795,703.343 216.604,702.959 214.878,703.154 213.92,703.538 211.237,705.071   210.471,706.025 210.087,706.025 208.746,706.409 205.104,704.688 199.739,704.688 198.206,704.305 196.864,702.771 196.48,702.576   196.289,702.388 195.906,702.005 195.714,701.81 195.139,701.238 194.564,700.088 193.414,699.705 192.456,699.705 191.881,700.659   191.881,702.005 191.689,703.921 191.498,703.921 190.54,704.109 190.348,704.109 188.815,703.921 188.432,703.538 187.473,702.959   186.898,702.771 186.515,702.576 186.132,702.005 185.94,701.238 185.94,700.472 186.323,699.705 185.557,699.321 185.365,699.893   185.365,700.472 185.173,700.854 184.982,701.043 184.215,701.043 183.832,700.472 183.64,700.472 183.065,700.854 182.494,701.238   181.916,701.621 181.728,701.81 181.532,702.192 180.961,702.576 179.811,703.921 179.428,705.259 178.466,705.454 177.895,705.454   176.17,705.838 172.337,707.559 165.629,705.071 165.246,704.492 163.904,699.126 164.096,699.321 164.863,699.705 165.054,699.705   165.438,699.51 166.204,698.555 166.013,696.06 165.438,695.488 165.821,693.189 165.246,691.656 164.288,690.311 164.096,689.927   163.904,689.544 163.713,689.739 163.33,689.927 163.33,690.311 162.946,690.506 162.755,690.89 162.563,690.89 161.222,690.693   161.03,690.123 160.838,689.356 160.072,688.973 159.497,688.396 158.73,687.248 158.73,686.29 159.305,686.098 159.88,686.098   161.03,686.098 161.605,686.29 161.605,686.098 162.18,685.715 161.988,684.564 161.988,684.564 161.988,683.99 162.18,683.415   162.372,682.266 162.563,681.307 162.946,680.732 163.138,680.54 162.755,679.966 162.755,679.773 161.605,679.007 161.222,679.199   160.455,678.815 160.455,677.666 160.455,677.666 160.455,677.474 160.263,676.324 160.072,676.133 160.072,675.366   160.072,674.216 160.263,673.641 160.263,673.641 160.072,672.875 160.072,672.3 159.305,672.491 159.305,672.491 158.73,672.683   157.58,673.258 157.389,673.449 156.622,674.024 156.047,673.449 155.855,673.449 155.28,673.258 154.897,673.066 154.706,672.875   154.13,672.875 153.939,673.066 153.556,674.216 153.747,674.791 153.747,674.982 153.747,675.174 153.747,675.94 153.556,676.516   152.981,677.666 152.022,678.049 151.256,678.624 151.256,679.199 150.873,680.157 149.339,680.157 149.148,680.157   148.765,680.732 148.765,681.115 149.148,683.415 146.082,686.864 145.123,687.057 140.715,685.331 139.565,684.948   136.499,679.391 137.458,677.474 136.691,677.282 136.308,676.516 132.479,674.216 131.329,673.258 129.412,672.683 125.962,672.3   126.154,672.108 126.346,671.533 126.537,670.383 126.537,669.042 125.579,668.85 125.196,668.85 124.813,669.042 123.854,667.892   123.279,667.892 122.513,667.892 121.555,668.467 121.555,669.616 121.555,670.191 121.746,670.383 120.788,671.533   120.596,671.725 120.405,671.725 118.872,671.725 118.68,671.725 118.105,671.725 116.763,671.533 116.572,671.533 116.38,671.149   115.422,671.533 115.039,671.533 112.547,672.3 111.781,673.066 111.206,674.407 110.822,674.791 110.631,674.982 108.906,674.982   108.522,675.558 109.098,676.707 109.672,677.474 110.822,679.582 110.822,681.307 111.206,681.882 111.206,682.457 110.248,682.84   107.564,685.523 105.839,686.673 106.223,686.673 107.181,688.59 107.181,689.927 107.181,690.506 107.181,690.89 106.606,691.656   106.415,692.039 106.031,692.61 105.265,693.377 104.307,693.572 101.815,696.255 101.624,696.639 100.857,696.639 98.749,697.593   97.599,697.021 96.832,696.639 96.257,696.443 94.916,697.788 94.724,698.938 94.533,700.088 92.041,701.621 92.424,702.005   91.85,702.959 90.316,702.959 89.358,702.959 88.017,702.192 87.441,701.81 85.529,700.276 84.762,699.893 84.567,700.088   83.034,700.854 82.079,700.854 81.696,700.854 81.5,701.043 81.117,702.771 82.462,704.688 82.846,706.221 81.884,707.176   81.313,706.792 80.734,706.604 74.797,704.876 74.605,705.071 73.455,705.259 72.305,705.643 72.114,705.454 71.539,704.492   70.964,703.343 70.964,702.959 70.197,701.81 69.622,700.472 69.622,695.677 69.239,694.91 68.281,694.144 67.897,694.526   67.323,695.104 66.748,695.677 65.79,696.443 66.173,693.76 66.364,693.189 65.214,691.077 64.256,690.311 64.064,690.123   63.681,688.973 63.106,688.777 63.49,688.396 64.064,688.011 64.256,688.011 64.448,687.823 64.64,687.631 65.214,686.481   65.214,686.098 65.023,683.798 65.023,683.606 64.448,682.648 64.256,682.266 64.064,682.073 63.873,681.882 63.681,681.69   63.298,680.732 62.915,680.54 62.148,680.349 60.615,680.54 60.231,680.349 57.932,679.582 58.315,679.199 57.549,679.007   57.932,678.433 57.74,678.433 56.399,678.433 56.016,678.815 55.057,679.007 54.866,679.007 54.482,678.624 54.482,678.24   55.249,676.707 55.824,675.558 55.824,675.366 55.632,674.982 56.974,674.407 58.507,671.533 59.657,669.233 60.231,668.85   60.423,668.467 60.615,667.509 60.998,666.934 61.19,666.358 61.573,665.783 61.573,665.592 61.957,665.017 61.957,664.825   62.148,664.25 62.34,663.676 62.531,663.292 63.298,662.718 63.49,662.143 63.873,661.376 64.256,660.609 64.256,660.038   65.023,660.992 65.598,662.143 65.981,662.143 66.364,662.525 66.364,662.143 66.748,660.805 66.748,660.226 67.131,659.459   68.855,658.31 69.239,658.121 69.814,657.738 70.389,657.543 70.964,657.738 71.922,657.926 73.072,657.926 73.455,658.121   74.03,658.505 74.414,658.888 74.988,657.738 75.372,658.121 75.755,657.738 75.755,657.738 75.755,657.354 76.138,656.972   76.713,656.972 77.097,656.589 77.48,656.205 77.863,656.01 77.863,656.01 78.438,655.626 78.63,655.626 79.779,655.822   79.971,655.822 80.929,655.822 82.65,655.822 82.846,655.822 83.417,656.393 83.612,657.159 83.996,656.776 84.184,656.589   84.379,656.205 84.762,656.01 84.95,655.626 84.95,655.626 84.95,655.243 84.95,654.859 85.529,654.093 85.529,653.905   86.295,653.139 86.295,653.139 86.675,652.756 87.25,652.756 87.441,651.989 87.441,650.644 88.591,650.261 88.975,649.689   89.358,649.494 90.125,649.11 90.508,648.923 91.658,649.494 92.233,649.689 92.808,649.877 93,650.261 93.574,651.027   94.533,651.41 94.724,652.177 95.107,652.372 95.682,653.139 95.874,653.326 96.449,653.139 96.257,652.756 96.065,652.372   96.257,651.989 97.215,649.877 96.257,649.306 96.257,649.11 95.874,648.728 95.874,648.728 95.874,648.156 96.449,647.772   97.024,647.772 97.024,647.577 97.215,647.194 97.407,646.623 96.641,646.623 96.257,646.811 95.299,646.623 94.341,645.473   93.766,645.09 93.574,644.896 93.574,644.706 93,644.706 92.808,645.277 91.85,645.277 91.658,644.896 91.85,644.323   91.466,643.939 91.083,643.744 90.891,643.557 90.125,645.277 89.741,645.473 89.167,645.473 89.167,645.473 88.975,645.09   88.591,645.473 88.591,645.661 87.825,646.044 87.633,646.044 86.867,645.473 86.483,646.044 86.295,646.428 85.146,645.473   84.762,645.09 83.8,645.473 82.65,646.044 81.696,646.044 80.734,645.856 80.163,645.661 80.163,645.661 79.971,645.661   79.588,645.856 78.247,646.044 77.288,646.428 74.03,646.239 72.88,646.811 72.688,646.811 71.155,647.772 69.622,646.239   69.431,646.428 69.047,647.006 69.239,647.194 67.323,647.006 67.131,646.623 66.939,646.428 66.556,646.428 65.79,646.428   65.214,645.856 65.023,644.896 64.448,643.744 64.256,643.744 63.873,643.939 63.49,642.978 63.298,642.978 62.531,642.978   62.148,642.79 61.765,642.978 61.765,643.361 61.573,643.557 61.19,643.744 61.19,643.557 61.381,642.595 60.807,642.023   60.998,641.444 60.231,641.257 60.423,641.062 60.423,640.678 60.423,639.911 60.807,639.724 60.998,638.573 60.423,638.957   61.19,638.19 61.19,637.999 61.573,637.615 61.573,636.466 61.19,636.082 60.807,636.273 60.231,636.082 59.848,635.891   59.657,635.508 59.848,635.315 60.423,635.508 60.615,635.315 61.19,634.166 61.573,634.166 62.148,634.357 62.915,634.166   63.106,634.166 63.681,633.782 64.064,633.016 64.256,633.016 64.256,632.824 64.448,631.675 65.79,631.291 67.897,630.716   68.855,629.949 69.431,629.183 69.814,628.8 70.197,628.416 70.389,628.033 70.772,627.267 71.155,626.883 71.539,626.691   71.922,627.075 72.114,627.075 72.497,626.691 72.497,626.309 72.88,625.158 74.414,624.009 74.605,623.817 75.18,623.625   75.372,623.434 75.947,623.051 76.713,622.858 77.288,622.476 78.63,623.051 79.013,623.434 79.779,622.858 80.354,622.284   80.354,622.284 80.546,622.092 81.117,621.9 81.313,621.325 82.079,620.367 82.462,620.559 83.034,620.176 83.229,619.792   83.612,619.601 83.996,619.218 84.567,618.451 84.762,618.067 84.95,618.067 85.333,617.109 85.717,616.343 85.912,615.959   86.483,615.192 86.675,615.001 86.483,614.81 86.483,614.618 86.867,614.238 88.208,613.089 88.591,612.51 89.167,612.127   89.167,608.489 88.783,605.61 88.975,605.228 89.167,605.039 88.591,604.077 88.975,602.928 89.167,602.739 89.167,601.973   89.741,601.396 90.316,600.823 91.466,601.011 92.233,601.396 99.898,601.206 103.731,601.777 105.073,602.356 107.948,602.739   109.098,603.506 109.481,603.506 110.248,603.694 111.014,604.272 111.972,605.228 112.739,605.61 113.889,606.761 114.272,607.144   114.655,608.104 114.655,608.677 114.464,608.872 114.847,609.443 114.847,609.639 115.039,607.339 114.081,605.806   114.081,605.423 113.697,604.272 114.655,602.161 114.655,601.59 115.23,601.011 115.422,599.673 115.23,600.057 115.039,600.057   114.655,600.244 113.505,600.057 113.314,599.478 112.739,599.29 111.972,599.29 111.589,598.907 111.206,598.711 111.014,598.711   109.864,597.944 109.672,597.944 108.331,597.374 107.373,596.607 106.989,596.224 106.798,596.028 105.648,595.074 105.265,594.69   103.157,593.346 100.09,592.195 99.898,591.241 101.624,589.133 104.115,588.558 106.798,587.6 110.248,586.833 111.206,587.024   113.314,587.791 114.655,587.983 116.572,587.217 117.913,586.642 118.296,586.258 119.063,585.491 119.255,584.533 119.063,584.15   118.872,583.767 119.255,582.809 119.446,582.042 119.638,581.084 122.705,580.509 123.279,580.317 123.854,579.934   124.238,579.358 125.004,578.784 125.196,578.4 125.388,578.018 125.579,577.825 125.962,577.634 125.771,577.442 124.238,578.4   123.471,578.209 119.638,578.209 118.68,578.592 118.105,578.784 117.913,578.784 116.955,579.167 116.572,579.358 116.188,579.742   115.997,580.125 115.614,580.509 115.23,581.084 115.039,581.084 114.847,581.467 114.464,582.042 114.272,582.233 113.505,582.042   111.972,581.658 109.289,581.851 108.906,581.851 108.331,581.658 107.756,581.851 107.564,582.042 107.373,582.233   106.989,582.425 106.798,582.809 106.415,582.809 104.307,582.042 104.307,582.042 102.007,581.084 100.282,581.084 98.174,581.084   97.024,582.617 96.449,583.191 95.491,583.191 90.7,582.617 89.358,582.425 88.783,582.617 88.4,582.233 88.017,582.233   87.441,582.617 87.25,581.084 87.058,580.125 86.675,578.209 86.675,576.101 86.675,573.993 87.058,572.843 87.633,571.692   87.633,570.927 87.441,570.735 84.95,569.968 84.379,569.776 83.8,569.202 83.612,569.394 83.417,569.01 83.229,569.01   82.846,568.626 82.65,568.626 82.267,568.626 81.884,568.435 82.079,568.243 80.929,568.052 79.971,567.477 79.779,567.477   77.097,566.71 77.097,565.944 76.33,565.561 75.947,565.177 75.755,564.794 76.138,564.606 77.097,564.794 78.821,565.177   79.205,565.177 79.588,565.372 79.588,563.644 83.996,563.261 86.483,563.261 89.741,563.073 90.7,562.878 92.233,562.878   94.916,562.306 96.257,561.923 97.791,562.11 97.982,560.577 99.707,560.007 98.749,558.661 103.348,558.661 103.923,558.856   104.498,559.044 105.839,559.428 107.181,559.428 107.756,559.044 108.139,558.661 108.139,558.278 109.098,556.557   109.481,555.595 109.864,554.64 110.631,553.49 111.781,553.106 112.547,552.911 112.931,552.528 113.505,552.341 114.081,551.957   114.655,551.957 117.338,551.957 120.213,551.573 121.171,551.378 121.746,550.995 122.321,550.424 122.513,550.424   122.896,550.041 123.088,550.041 123.088,549.845 123.471,549.658 123.663,549.274 124.238,548.891 124.621,548.508   125.004,548.312 125.771,547.929 126.154,547.741 126.537,547.741 126.92,547.358 127.687,546.975 127.687,546.975 130.367,545.629   130.945,545.246 131.133,544.673 131.517,544.098 131.517,543.906 131.9,542.566 132.095,541.992 132.095,541.992 132.283,539.692   132.283,537.201 132.095,536.625 132.095,534.518 132.283,534.134 132.666,533.368 132.666,533.176 133.049,532.601   133.245,532.026 133.628,531.451 133.628,531.068 133.816,530.685 134.395,529.918 134.395,529.727 134.774,529.343 135.158,528.96   135.349,528.577 136.116,528.385 136.882,528.385 137.649,528.001 138.799,528.193 139.182,528.577 139.949,528.96 140.715,528.96   141.291,528.385 142.249,527.427 142.824,526.852 143.207,526.66 143.59,526.468 144.165,525.894 145.698,525.51 146.656,525.318   147.615,525.51 148.573,526.468 149.723,527.043 151.064,527.427 151.639,527.618 153.172,527.618 154.13,527.427 154.514,526.852   154.897,527.235 156.239,527.427 156.43,527.235 156.813,527.235 159.113,529.535 159.305,529.343 160.838,528.96 160.838,528.577   160.838,528.193 161.413,527.427 161.605,527.427 162.563,528.385 162.563,528.577 162.755,530.685 163.904,531.451   164.479,532.218 164.096,535.092 164.479,536.242 164.288,536.625 164.479,538.351 164.863,538.925 165.054,539.117   165.629,539.884 166.013,539.884 166.396,540.075 166.779,540.458 167.354,541.033 167.546,541.225 167.737,541.608   168.121,541.992 168.696,542.183 168.887,542.375 169.462,542.95 169.462,543.142 170.229,542.566 170.612,542.758 170.612,542.758   171.762,542.566 172.72,543.142 173.104,543.715 173.679,544.098 174.828,544.673 175.02,545.058 175.595,544.863 175.787,544.863   176.361,544.673 176.745,544.29 176.933,543.906 177.128,543.333 177.128,542.758 177.128,542.375 177.128,541.992 177.128,541.033   177.316,540.842 177.511,540.65 178.661,540.267 179.616,539.309 180.961,540.65 183.64,540.075 184.599,539.309 187.665,540.075   187.856,540.267 188.623,540.075 188.623,538.925 189.198,537.967 191.306,537.775 194.564,538.542 195.906,540.458   196.864,540.842 197.439,539.117 197.439,534.518 198.014,534.518 198.78,534.518 198.972,534.901 199.547,535.284 200.313,535.476   202.613,535.092 202.805,534.901 204.913,533.942 205.104,533.368 205.104,532.601 207.021,532.026 210.854,530.876   212.579,531.068 212.771,532.026 213.154,532.409 213.154,532.601 213.345,533.368 214.112,533.559 214.878,534.326   214.495,536.051 214.304,537.201 214.112,537.392 214.112,537.775 214.304,538.159 214.495,538.351 215.07,538.734 215.837,539.117   216.028,539.309 215.645,540.075 215.645,540.65 215.645,540.842 216.028,541.417 216.22,541.608 216.412,541.992 216.412,542.183   216.22,542.566 216.028,543.525 216.22,543.906 216.795,543.906 216.604,544.863 216.22,545.441 216.412,546.013 216.22,546.591   216.604,547.162 216.987,547.545 217.37,548.125 217.37,548.312 217.562,548.508 218.328,549.274 218.711,550.041 218.52,550.424   218.711,550.808 218.903,551.378 219.287,551.957 219.478,551.957 219.478,552.146 219.287,552.341 220.245,553.874   220.437,553.874 221.395,555.023 221.778,554.828 221.778,555.023 222.161,555.595 222.353,555.978 222.736,556.361   222.928,556.361 223.119,556.557 223.311,556.745 223.311,556.745 223.886,555.978 224.269,555.79 225.032,555.407 225.416,555.212   225.799,554.64 226.182,554.062 226.761,553.679 226.949,553.49 227.332,553.295 227.527,552.724 228.098,552.724 228.865,552.528   229.061,552.528 229.061,553.295 229.248,553.49 229.444,554.062 229.248,555.407 229.631,555.79 230.21,556.745 230.781,556.94   230.594,557.706 230.977,557.896 231.356,558.661 231.356,559.044 231.548,559.428 231.931,560.39 231.931,560.772 232.314,560.772   232.314,560.961 232.506,561.156 232.698,561.923 233.273,561.728 233.656,561.728 234.04,561.728 234.423,560.961 234.998,560.961   234.998,561.345 235.189,561.345 235.573,561.728 235.573,561.923 235.956,562.306 235.956,562.306 237.489,562.689   238.064,563.073 238.639,562.11 238.831,562.11 239.405,561.345 239.98,561.156 240.555,561.156 240.747,561.345 241.13,561.923   241.322,562.494 242.088,562.494 242.472,562.11 242.855,561.923 244.005,561.54 244.197,561.54 244.963,560.961 244.963,560.961   245.347,560.577 245.73,560.39 245.921,560.194 246.305,559.428 246.497,557.706 246.305,557.511 245.921,556.745 246.688,555.978   247.071,555.407 246.688,554.062 247.071,553.295 247.071,552.911 246.88,552.528 246.88,551.573 246.88,551.378 246.305,550.995   245.73,550.229 246.113,549.658 246.88,549.845 250.712,551.378 250.904,551.573 251.862,551.762 252.246,552.146 253.587,553.49   253.971,553.295 254.162,553.106 256.845,554.257 257.037,554.444 257.229,554.64 260.678,556.94 259.912,553.679 262.02,552.911   262.211,552.724 262.403,551.957 263.361,551.573 264.128,551.378 260.87,546.396 261.062,545.058 261.253,544.673 263.361,543.906   263.745,543.906 "
      transform="translate(106.95522,19.462687)"
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "white",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Jeonbuk;
