import React from "react";

function Gangwon({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="강원"
      className="area"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      strokeMiterlimit="1"
      points="435.638,329.663 434.871,329.088   434.676,329.088 434.488,328.896 434.104,328.705 433.722,328.513 433.143,328.322 432.759,328.322 432.188,327.938   431.805,327.938 431.422,327.555 431.422,327.363 431.038,326.022 430.843,325.449 430.655,325.065 429.889,325.639 429.505,325.83   429.505,325.83 429.31,326.213 429.122,326.213 428.738,326.597 427.589,327.172 427.205,326.789 426.822,326.022 425.86,326.213   425.672,326.597 424.905,326.98 424.71,326.789 424.521,326.597 424.327,326.405 422.41,325.83 421.839,325.449 421.839,325.449   421.261,325.257 420.306,324.682 419.729,324.874 418.961,325.257 418.39,325.449 418.006,325.257 416.855,324.874 416.09,324.682   415.52,323.341 414.94,322.574 414.94,322.574 414.557,322.382 413.604,321.999 413.219,321.999 412.257,322.574 412.069,322.766   411.686,323.341 411.49,322.958 411.874,320.274 411.686,319.699 410.919,319.508 410.536,319.316 410.341,318.933 409.957,318.741   409.77,318.549 408.236,318.166 407.657,318.166 407.086,318.741 406.508,319.508 406.319,320.083 403.637,320.658 400.375,321.041   395.775,318.933 392.709,317.016 392.521,315.675 392.904,314.333 390.988,311.458 390.409,311.267 389.643,310.5 389.455,310.117   389.071,310.5 388.493,311.267 387.922,311.65 383.322,310.884 382.743,311.458 382.172,311.267 381.405,310.884 380.827,312.034   380.443,312.225 380.061,311.842 378.91,312.8 378.723,312.992 378.527,312.992 378.339,312.992 376.807,314.142 375.273,315.675   375.077,315.866 374.694,315.866 371.628,313.95 371.44,313.567 370.674,312.992 369.907,311.458 369.336,310.309 370.479,308.775   375.273,305.326 375.656,304.751 379.872,301.878 380.061,301.495 380.639,298.812 380.061,298.237 378.527,297.662   376.994,297.662 376.807,297.854 376.04,298.237 373.928,298.62 368.569,299.003 366.652,295.746 365.503,296.32 364.924,295.937   363.97,296.32 360.903,293.254 359.754,292.296 359.175,291.721 358.791,291.721 358.024,292.104 355.537,293.829 355.342,294.021   354.771,294.404 353.809,295.17 353.809,295.937 352.854,298.62 352.471,299.003 352.275,299.195 350.938,298.812 348.255,296.896   346.722,295.937 344.805,296.32 344.609,296.512 345.376,297.47 344.038,299.195 343.46,299.77 342.693,300.92 342.505,301.112   341.738,301.687 340.776,302.07 337.71,303.218 332.728,304.56 331.961,304.56 330.24,304.368 329.856,300.153 330.24,299.962   330.623,299.003 329.09,297.087 328.707,296.704 327.361,294.212 326.212,292.487 325.445,291.529 323.912,290.955 323.343,290.955   322.764,290.955 321.426,290.188 319.701,290.379 318.168,291.529 316.635,292.296 314.91,293.446 313.568,294.021 311.652,298.237   312.994,304.368 312.228,308.775 310.502,309.734 302.453,310.309 299.195,311.075 297.854,312.8 294.404,312.992 294.212,313.184   293.638,313.567 293.254,313.95 292.104,314.142 290.955,314.333 289.229,314.333 288.846,314.525 288.271,314.333 288.08,314.333   287.888,313.95 287.696,313.567 287.505,313.567 287.313,313.375 287.122,313.184 286.546,312.992 285.972,312.8 284.438,311.65   284.247,311.458 283.864,310.884 283.48,310.117 283.097,309.734 283.097,309.542 282.331,308.009 282.139,307.242 281.947,306.476   281.755,305.134 281.564,304.56 281.372,303.601 281.181,302.836 280.989,302.07 280.797,301.495 280.605,301.112 280.989,299.77   281.181,299.387 281.372,298.812 280.989,296.129 280.989,295.554 280.989,294.404 281.372,292.871 281.564,292.487   282.139,291.913 282.331,291.721 282.522,291.529 282.522,291.146 282.714,290.763 282.905,290.571 282.905,290.188   282.714,288.846 282.331,286.163 282.331,285.972 282.331,285.013 282.139,284.055 282.331,283.48 282.331,283.289 282.522,282.713   284.055,281.181 284.247,280.989 284.438,280.222 284.438,279.456 283.289,274.475 283.097,272.941 282.714,271.983 282.714,271.6   283.097,270.45 283.097,270.258 282.905,268.917 283.289,267 283.48,266.809 284.438,266.809 285.205,266.617 285.588,266.617   285.972,266.042 285.972,265.851 285.78,265.084 285.78,264.317 286.163,263.359 286.355,262.593 286.546,262.209 286.93,261.826   287.122,261.443 287.313,260.293 287.696,260.101 287.696,258.951 287.888,258.76 288.08,257.993 288.655,255.693 289.996,252.821   289.805,252.246 289.421,251.288 289.038,246.879 289.613,245.921 287.696,244.196 287.122,243.622 286.93,243.238 286.546,242.664   286.355,241.514 285.397,241.13 284.63,240.747 283.864,240.555 283.672,240.555 283.48,240.747 283.672,238.447 284.055,238.255   284.247,238.064 284.438,237.872 285.205,237.681 285.588,237.297 285.972,237.105 286.163,236.531 286.355,236.339   286.738,236.531 286.93,236.339 287.122,236.147 287.505,235.764 287.505,235.381 287.888,234.998 288.271,234.806 288.655,234.231   289.613,232.698 290.379,232.506 290.571,232.314 290.955,231.356 291.146,231.165 291.338,231.165 292.104,231.165   292.296,231.165 293.254,230.973 294.212,231.165 294.596,230.973 295.362,230.781 297.47,228.675 297.278,227.525 296.896,227.142   296.704,226.95 296.513,226.567 296.129,226.375 295.745,226.184 294.788,225.992 294.021,225.992 293.446,225.8 292.488,225.609   291.913,225.417 291.146,224.076 291.146,223.884 291.146,223.5 290.571,223.309 290.188,223.117 290.188,222.159 289.421,221.584   289.038,221.201 288.846,221.009 288.271,220.817 287.888,221.393 287.505,222.159 287.122,222.351 286.163,222.159 284.63,221.776   283.864,221.584 283.48,220.817 283.289,220.626 281.564,219.476 280.222,220.243 280.222,220.243 279.456,220.435 278.881,220.435   276.393,219.859 275.626,220.051 275.431,220.243 274.093,220.626 273.898,220.817 273.515,220.243 272.943,220.243   272.177,219.668 272.177,219.093 272.56,218.709 272.177,218.326 271.793,217.751 271.793,217.751 271.027,217.56 270.835,217.368   270.644,216.985 270.26,216.985 270.069,216.41 269.686,216.218 269.302,216.026 268.919,215.835 268.728,215.643 268.536,215.452   268.152,215.068 267.386,214.493 267.386,214.493 267.002,214.302 266.619,213.535 265.853,212.769 264.895,213.152 264.128,212.96   263.936,212.769 263.745,212.002 263.553,211.811 261.253,210.277 261.253,209.702 261.253,209.511 261.062,209.511   260.678,209.511 259.72,208.936 259.528,209.127 259.336,209.319 258.57,208.361 257.804,208.169 257.612,208.169 257.037,207.786   257.037,207.594 256.654,207.211 255.695,207.594 255.312,207.978 254.737,208.361 254.162,208.552 253.971,208.744   253.396,208.936 252.821,209.319 252.438,210.852 252.054,211.044 250.712,211.235 249.754,211.044 248.988,211.619   248.604,212.002 248.03,211.619 247.838,211.427 247.455,211.427 246.688,211.044 246.497,210.085 245.73,209.702 245.347,209.511   244.771,208.936 244.58,208.169 244.58,207.594 244.58,207.594 244.58,207.402 245.155,207.211 245.73,207.211 245.921,207.019   246.113,206.446 246.305,206.063 246.688,205.488 247.071,205.296 247.455,204.913 247.455,204.721 247.071,203.955   247.071,201.463 246.88,201.08 247.071,200.697 247.071,199.93 247.071,199.164 247.263,198.588 247.455,198.205 247.646,197.247   248.03,196.48 248.03,196.289 248.413,194.181 248.604,193.223 248.796,192.456 248.988,192.264 248.988,192.073 248.604,191.881   247.263,190.731 247.071,191.114 246.688,191.498 246.688,191.881 246.305,191.881 246.113,192.264 245.73,192.647 245.538,192.647   244.771,192.456 244.197,192.073 243.622,191.498 243.238,191.306 242.664,191.114 242.472,191.306 241.897,191.881   241.514,192.264 240.938,192.647 240.364,193.031 239.789,192.647 239.789,190.156 239.98,189.581 240.172,189.39 240.747,188.814   240.938,188.623 241.322,188.431 241.514,188.24 241.897,188.048 242.088,187.856 242.28,187.665 242.664,187.473 243.238,187.09   243.813,186.707 244.005,186.515 244.197,186.323 244.771,185.94 245.155,185.557 245.921,184.215 245.73,182.682 245.538,182.299   245.155,181.532 244.771,180.957 244.58,180.766 244.197,180.192 244.005,180.001 243.43,179.234 243.238,179.042 242.664,175.785   242.855,175.593 243.047,175.209 243.238,174.826 244.58,172.335 243.238,170.994 244.58,166.011 244.963,165.819 248.03,164.094   250.904,160.261 251.096,160.07 251.862,159.687 254.929,159.495 256.654,155.855 256.462,155.28 256.462,154.706 256.462,154.514   256.271,153.939 256.845,153.747 257.229,153.364 257.612,152.98 257.42,151.639 256.845,149.723 256.271,149.531 256.079,148.765   255.121,148.381 254.929,148.189 254.737,147.231 254.545,145.89 254.929,145.123 254.545,142.44 253.971,142.057 253.012,141.099   251.862,140.907 250.521,140.523 249.179,140.715 248.604,140.907 248.221,141.29 246.305,140.715 245.921,140.907 245.155,141.099   244.771,140.523 244.005,139.949 244.388,139.565 244.005,139.182 244.197,138.224 244.005,138.224 244.005,136.499   244.197,136.116 244.197,135.924 244.005,134.583 243.43,133.625 243.43,133.241 242.855,133.049 242.855,132.858 242.472,132.666   241.322,132.666 239.98,132.858 238.447,133.049 237.873,132.858 237.681,132.285 236.531,131.901 235.764,132.093 234.614,131.71   233.081,131.327 231.548,130.368 231.356,129.985 231.165,129.793 230.977,129.218 230.398,126.535 230.015,125.96 230.015,125.577   230.015,125.386 229.827,124.811 229.827,124.619 230.015,123.853 229.827,122.894 229.631,122.511 228.865,122.319   229.061,121.361 226.182,108.714 225.611,109.289 225.416,109.481 222.161,110.248 216.987,108.522 216.412,109.672   213.729,110.631 213.537,110.822 212.579,110.822 210.854,112.162 209.513,113.12 207.404,111.97 207.213,111.396 206.638,110.631   206.254,108.906 206.063,108.139 205.68,107.756 205.296,108.331 204.913,108.522 203.763,108.522 203.571,108.906 203.188,108.906   202.997,108.906 202.613,108.331 202.23,108.522 201.463,106.606 200.505,106.415 200.697,103.731 201.271,102.773 201.655,102.39   201.655,102.198 202.23,101.048 202.23,101.048 202.23,100.665 202.23,99.132 202.23,97.599 202.23,97.407 203.38,96.449   203.763,95.682 202.23,95.299 199.547,94.532 198.589,94.916 198.397,95.299 198.589,96.065 198.397,96.449 197.247,97.599   196.289,98.749 194.947,99.707 194.564,99.898 194.564,100.09 194.181,100.282 193.989,100.856 193.606,101.432 193.414,101.623   193.223,101.815 192.456,101.815 191.689,101.815 191.306,103.923 190.923,103.731 190.731,103.54 190.156,102.965 188.623,101.432   188.432,101.048 188.24,100.856 187.665,100.282 186.707,99.707 186.323,99.515 185.749,98.557 185.557,97.599 185.365,97.024   185.365,95.491 185.94,93.191 183.832,93.766 183.64,93.382 183.257,92.999 183.257,92.616 182.877,92.232 182.877,92.041   182.682,91.85 182.111,91.274 181.916,90.699 182.111,90.508 182.494,89.933 182.877,89.55 182.877,88.208 182.682,87.825   182.494,87.825 182.111,87.633 181.916,87.441 181.344,87.25 181.149,87.058 180.961,86.867 180.766,86.675 180.961,86.483   180.961,86.1 180.766,85.525 180.961,84.567 181.344,83.802 181.149,83.419 180.766,82.652 180.578,82.46 180.578,82.46   179.999,82.269 179.811,82.077 179.044,81.694 178.849,81.886 178.661,82.269 178.278,82.46 177.895,82.844 177.128,83.036   176.17,83.61 175.211,83.61 174.828,83.61 174.445,83.61 174.253,83.227 174.062,83.227 173.679,83.036 172.912,82.652   172.529,81.886 172.529,81.694 172.72,80.736 173.104,76.903 172.337,71.153 172.72,70.962 173.295,70.579 174.062,69.812   174.637,69.237 175.211,69.045 176.17,68.087 176.933,67.32 177.316,66.171 177.699,64.254 178.083,63.296 178.466,62.34   178.849,62.148 181.149,62.531 181.532,63.679 182.111,64.446 183.257,65.212 184.599,65.788 186.898,65.404 188.623,64.638   190.54,63.679 190.923,63.488 192.839,61.957 193.989,61.381 194.564,61.19 194.756,61.19 195.714,61.381 197.439,62.531   198.972,62.915 199.164,62.915 200.505,62.915 201.08,63.488 202.038,63.679 203.188,63.488 203.763,64.063 204.338,65.021   204.53,65.212 205.104,65.596 206.063,65.788 207.213,65.404 208.171,64.829 208.938,63.679 209.321,63.296 210.087,63.106   210.663,62.531 211.237,62.723 211.812,63.106 212.387,63.106 213.345,63.106 215.262,62.531 215.837,62.34 216.412,61.957   216.987,61.573 217.37,61.19 217.945,61.19 218.52,60.807 218.903,60.807 219.67,61.19 220.245,61.381 221.203,61.19 222.161,61.19   224.652,61.765 225.228,61.957 225.611,62.531 225.994,62.915 226.565,63.488 227.144,64.063 228.481,65.021 229.248,65.596   229.631,65.596 230.977,65.212 231.74,65.021 233.273,65.021 233.656,65.404 234.423,66.938 235.189,68.087 235.573,68.471   238.064,68.471 239.214,68.471 240.364,67.896 241.897,66.554 242.855,65.788 243.813,64.829 244.771,63.871 245.538,63.488   246.305,62.915 248.221,62.34 249.563,61.957 250.138,61.573 250.712,61.381 251.862,60.807 252.438,60.615 256.654,60.807   256.845,61.381 257.037,61.765 257.42,62.148 258.187,62.34 258.762,62.531 259.336,62.531 260.103,62.723 261.062,62.915   263.169,62.723 268.344,62.531 269.686,61.957 270.26,60.998 270.644,60.231 271.027,59.848 271.219,59.848 274.093,59.848   274.477,60.615 274.86,61.19 276.393,60.998 276.776,60.615 277.731,59.465 279.076,58.698 280.222,58.89 280.989,59.273   282.139,58.698 283.48,57.74 284.247,57.548 284.63,57.74 285.588,59.273 286.163,60.423 286.93,62.148 287.696,63.106   288.463,63.488 289.229,63.488 290.188,63.488 292.104,63.106 294.212,62.723 295.362,62.531 296.513,62.148 297.278,61.957   298.429,61.381 298.62,61.381 299.003,60.998 299.195,60.423 299.579,59.657 300.345,59.465 301.495,59.465 303.028,59.848   304.179,60.04 305.328,60.231 308.011,60.615 308.969,60.807 310.502,61.19 311.652,61.573 312.61,62.148 313.186,62.723   313.952,62.915 315.485,62.531 317.019,62.531 317.401,62.915 317.593,63.488 317.785,64.254 318.168,64.638 318.743,64.829   319.51,64.829 320.085,64.446 323.147,64.638 325.257,64.446 326.023,64.254 326.595,64.254 327.361,65.212 327.745,65.212   329.278,65.596 329.856,65.788 331.773,65.596 333.494,65.021 335.223,64.063 335.411,64.063 336.561,63.296 337.522,62.531   338.673,61.765 342.122,59.657 342.505,59.465 346.722,57.357 352.659,53.716 355.154,51.799 355.537,51.607 356.304,51.416   357.454,50.649 358.604,49.691 358.987,49.116 359.175,48.924 359.558,48.733 359.941,47.966 360.521,47.391 361.475,46.625   362.053,46.241 362.241,45.475 362.624,44.708 363.008,44.133 364.157,43.175 365.308,42.217 365.69,41.642 366.27,41.067   366.652,40.3 367.419,39.726 368.186,39.534 368.569,39.15 368.757,38.576 369.141,37.617 369.712,36.086 370.095,35.128   370.674,33.786 371.057,32.636 371.245,32.253 371.628,31.295 371.823,30.337 371.628,28.995 371.628,28.037 372.012,25.929   372.207,23.821 372.59,23.438 373.161,22.671 373.544,22.096 373.356,21.521 372.974,20.563 372.778,19.988 373.161,18.455   373.356,13.857 373.74,11.557 373.356,8.299 373.161,7.341 372.778,5.808 373.356,3.316 373.544,3.125 373.928,2.55 374.507,1.975   375.077,1.975 375.844,1.975 376.61,1.975 377.956,1.592 379.489,1.017 380.256,0.633 380.639,0.25 381.022,1.783 381.022,1.975   381.405,2.358 381.594,2.742 382.172,3.508 382.556,4.466 383.127,5.425 383.127,5.616 384.276,6.958 384.472,7.341 384.855,7.725   385.238,8.299 385.622,8.683 386.193,9.449 386.389,9.641 386.96,10.407 387.343,10.791 387.538,10.982 388.305,11.366   388.493,11.749 388.876,12.516 388.688,13.09 388.688,13.282 389.26,13.282 389.455,13.857 389.455,14.049 389.26,14.815   389.643,15.007 389.26,15.197 388.305,15.963 388.688,15.771 388.876,15.963 389.26,16.73 389.643,17.305 389.838,17.497   390.222,18.838 390.793,19.604 390.988,19.988 392.138,22.288 391.942,23.054 391.56,23.629 391.942,23.821 392.709,24.587   392.521,24.779 392.326,24.971 392.709,25.545 393.671,27.271 394.055,27.462 394.438,27.462 395.009,27.462 395.204,28.037   394.821,28.229 394.626,28.612 394.626,29.378 395.009,30.145 395.971,30.72 395.971,30.72 396.354,30.912 396.542,31.295   396.542,31.486 397.309,32.636 397.504,32.828 397.691,33.211 398.075,33.786 398.653,34.553 399.42,35.319 399.608,35.319   399.608,35.319 399.608,35.703 399.225,36.086 398.653,36.086 397.888,35.895 397.691,36.276 397.504,36.659 397.504,38.192   397.691,39.15 397.888,39.534 398.075,40.109 398.271,40.3 398.458,40.684 398.653,41.067 398.842,41.259 399.037,42.025   399.608,42.6 399.608,42.792 399.991,43.367 400.188,43.75 400.953,44.708 401.337,45.283 401.337,45.475 402.675,46.816   403.253,47.391 404.786,49.308 405.553,49.5 406.319,50.649 406.508,50.841 407.274,51.607 407.853,52.183 407.853,53.716   408.041,55.44 408.619,56.782 409.574,58.89 410.536,59.082 411.686,59.273 411.874,61.19 412.836,62.34 413.604,63.679   413.985,64.254 414.174,65.021 414.557,65.979 414.94,67.32 415.706,69.045 415.706,69.429 416.09,70.579 416.285,71.92   416.473,72.495 416.855,73.453 417.052,73.836 417.436,74.22 418.006,74.795 418.194,75.178 419.539,76.711 420.306,78.628   420.689,79.394 420.689,81.119 420.306,81.311 419.923,81.694 420.11,81.886 420.877,83.61 421.645,84.567 421.839,84.95   422.989,86.675 422.989,86.867 422.794,86.292 422.794,86.1 421.839,87.441 421.839,88.208 422.027,88.591 423.372,90.508   424.139,91.85 424.521,92.232 424.327,92.808 423.943,93.766 423.756,94.532 424.139,95.491 424.71,97.215 424.521,97.982   424.327,98.365 424.327,98.749 424.905,100.09 425.289,100.665 425.86,101.623 426.056,101.815 426.438,102.007 426.627,102.39   426.822,102.773 426.822,102.965 427.01,103.348 427.395,103.348 427.972,103.731 428.16,103.923 428.543,104.689 428.355,104.881   428.543,105.265 428.927,106.031 429.505,106.606 429.693,106.989 429.889,107.181 430.271,107.564 430.46,107.756 430.655,107.948   431.609,109.098 432.571,110.248 433.143,110.822 433.338,110.822 433.525,111.014 433.722,111.206 434.488,111.587 434.488,111.97   434.871,112.354 434.871,112.737 435.825,114.462 436.021,114.653 436.021,115.611 436.209,116.761 436.404,116.761   436.976,117.528 437.742,118.87 437.938,119.061 438.32,119.444 438.892,120.02 439.087,120.211 439.275,120.594 439.471,120.786   439.854,121.169 440.042,121.553 440.425,121.936 440.809,122.127 443.875,124.811 444.258,125.386 444.453,125.386   445.024,125.577 445.408,125.577 445.604,125.386 445.986,125.386 446.37,125.769 445.986,126.727 445.986,126.919 445.791,128.452   445.791,128.835 445.791,129.218 446.175,129.41 446.558,129.793 446.941,130.368 447.137,130.751 447.324,131.327 447.52,131.71   448.286,131.901 448.67,132.093 448.67,132.666 448.67,133.049 449.053,133.433 449.438,133.816 449.819,134.008 450.203,134.008   450.774,134.008 450.774,134.199 451.157,134.583 451.157,134.774 450.391,135.349 450.391,135.541 450.586,136.116   451.541,136.308 451.541,136.499 451.541,136.691 451.157,137.458 451.541,137.841 451.736,138.224 452.119,138.416   452.308,138.799 452.308,138.99 452.119,138.99 452.308,139.565 452.69,139.949 453.27,140.523 454.036,141.29 454.224,141.482   454.419,141.482 454.605,141.482 455.186,141.673 455.569,142.057 455.569,142.249 455.569,142.632 455.373,142.823   455.569,143.015 455.569,143.59 455.373,143.59 455.569,144.356 456.14,144.74 456.523,145.315 457.102,145.89 459.02,147.615   459.206,147.998 459.401,148.189 459.785,148.381 461.506,149.914 461.89,150.106 462.468,150.106 462.852,150.681 462.468,150.489   463.039,151.447 463.234,151.831 463.234,152.406 463.039,154.13 463.234,154.514 462.656,154.706 462.656,154.706 463.039,154.706   462.852,155.089 463.423,156.047 463.618,156.239 464.768,157.58 468.405,161.794 468.405,161.794 468.789,162.178 469.172,162.369   469.556,162.944 469.938,163.136 470.322,163.711 470.322,163.711 470.705,164.286 470.705,164.478 471.089,164.861   470.705,164.669 470.705,165.244 470.893,165.819 471.276,166.585 471.276,166.585 471.855,167.161 472.043,167.352   472.238,167.544 472.426,167.735 472.81,167.927 473.005,168.311 473.005,168.311 473.388,168.694 473.771,169.077 473.959,169.269   474.154,169.46 474.921,170.227 475.109,170.418 475.305,170.61 475.688,170.994 476.071,171.185 476.259,171.568 476.454,171.76   476.643,171.952 476.838,172.144 477.221,172.526 478.559,174.06 478.942,174.443 479.325,174.826 479.904,175.401 480.287,175.593   480.858,176.359 481.625,177.126 482.204,177.509 482.392,177.701 482.775,178.084 482.971,178.276 483.354,178.276   483.737,179.426 484.309,180.001 484.12,180.192 483.737,180.574 483.354,180.957 483.354,181.724 484.12,181.916 486.037,181.724   486.804,182.299 487.57,182.874 488.72,184.023 489.291,184.599 489.675,184.215 489.87,184.79 489.675,184.982 489.675,184.982   490.058,184.79 490.058,185.557 490.44,185.748 490.058,185.748 490.058,185.94 490.253,185.94 490.824,187.09 491.02,187.665   491.591,188.24 491.974,188.623 492.357,189.006 492.74,189.198 492.938,189.773 493.319,189.773 493.507,190.156 493.702,190.348   494.086,190.731 494.273,191.498 494.657,192.073 495.04,192.456 495.424,192.839 495.807,193.223 496.386,193.797 496.573,193.989   497.152,194.181 497.535,194.756 497.724,195.139 498.105,195.139 498.302,195.522 498.49,195.714 498.873,196.097 499.068,196.097   500.023,196.672 500.406,197.438 501.173,198.014 501.557,198.205 501.752,198.397 501.557,198.588 501.557,198.78 501.939,198.78   502.135,198.972 501.939,198.972 501.557,200.313 501.557,200.697 501.752,202.23 501.173,203.188 500.79,204.338 501.173,203.763   500.602,203.38 500.602,204.146 500.406,203.955 500.023,204.53 500.023,204.721 499.835,206.254 500.219,207.019 500.219,207.402   500.602,207.786 500.79,208.169 500.79,208.361 500.985,208.552 501.173,208.936 501.368,208.936 502.135,208.936 503.285,209.511   502.135,209.127 502.323,210.085 502.706,210.852 502.901,210.852 503.09,211.235 503.668,212.002 503.668,212.002 503.855,212.193   504.052,212.385 504.818,213.152 505.006,213.343 505.771,213.918 506.156,214.302 506.352,214.493 506.734,214.685   507.118,215.068 507.885,215.452 508.456,216.026 508.651,216.218 509.034,216.602 509.418,216.602 509.801,216.985   510.185,217.368 510.185,217.368 510.372,217.56 510.951,218.135 511.521,218.135 511.521,218.326 511.521,218.326 512.484,219.476   512.867,221.201 512.867,221.967 513.251,223.117 513.251,223.692 512.867,224.459 512.672,225.034 511.718,225.034   511.718,225.034 511.718,225.226 512.101,225.226 511.718,225.417 511.905,226.184 512.867,228.675 513.634,231.356 513.821,231.74   514.972,233.273 515.738,234.423 516.888,235.189 517.271,235.381 517.654,235.764 518.038,235.764 517.654,235.764   515.926,234.614 515.159,235.189 515.354,235.572 515.543,235.572 515.543,235.764 516.121,235.381 515.738,235.764   516.121,236.339 514.776,237.105 514.776,237.297 514.972,237.681 517.076,236.531 517.271,236.722 517.271,236.339   517.459,236.147 517.076,237.105 517.271,237.297 517.843,237.105 518.226,237.681 518.421,237.872 518.609,238.064   519.188,238.639 519.759,239.214 519.759,239.405 520.338,239.98 520.721,240.938 521.104,241.322 521.871,242.088 522.254,242.472   523.592,243.047 524.171,244.005 525.704,247.455 525.892,247.455 525.892,248.029 526.087,248.604 526.471,249.371   526.471,249.563 526.087,249.179 525.892,248.604 525.892,249.371 526.087,249.563 526.854,252.629 527.237,253.587 527.62,253.779   527.808,254.162 527.808,254.162 528.191,254.737 529.153,255.502 529.537,255.885 529.725,256.077 529.92,256.269 530.688,256.843   530.874,257.035 531.453,257.418 531.836,257.61 532.024,257.802 532.791,258.376 533.174,258.568 533.174,258.568 533.558,258.76   533.753,258.76 533.94,258.568 534.324,258.76 534.52,259.334 535.091,259.526 535.474,259.91 535.669,260.101 535.857,260.293   536.24,260.484 536.819,261.634 536.624,261.251 536.24,262.018 536.436,262.976 536.24,264.126 536.24,264.317 536.624,264.317   537.202,265.276 537.202,265.659 538.924,268.917 539.119,269.108 539.119,269.492 539.502,271.217 539.502,271.6 539.502,271.6   539.502,271.792 539.307,272.367 539.502,272.75 540.457,273.708 540.84,273.9 541.224,274.283 541.802,274.667 541.99,274.667   542.186,274.858 542.757,275.433 542.952,275.433 545.057,277.731 545.252,279.072 545.439,279.264 546.019,279.456   546.019,279.456 546.401,279.072 546.59,279.647 546.59,279.839 546.785,280.222 547.356,279.839 547.356,279.647 547.739,279.647   548.506,279.647 548.506,280.222 548.506,280.414 548.701,280.989 549.271,281.181 549.271,281.372 549.655,284.438   551.384,286.546 551.572,286.546 551.955,286.93 552.151,287.888 552.151,288.08 553.301,288.271 553.488,289.229 554.067,290.379   554.639,290.763 554.255,291.529 554.067,291.529 553.684,291.913 553.301,292.104 553.105,292.104 553.105,292.487   552.917,292.296 552.339,292.679 552.339,294.021 552.534,294.212 552.722,294.212 552.917,295.17 552.917,298.237 552.722,298.237   552.722,298.812 552.722,299.195 552.722,299.579 552.339,299.579 552.151,299.962 552.722,301.878 552.534,303.41 553.301,303.793   552.722,303.601 553.301,305.134 553.488,305.326 554.255,306.093 555.021,306.859 555.405,307.242 555.601,307.434   555.601,307.625 555.788,308.009 555.983,308.392 555.983,308.392 555.983,308.775 556.172,309.159 556.555,309.351   554.639,309.925 554.067,309.925 551.188,310.884 549.655,311.075 547.935,312.992 547.552,313.567 546.785,313.95 545.823,314.525   544.868,316.058 544.868,316.441 543.335,316.441 541.802,316.058 541.606,316.25 540.652,317.783 540.457,318.741 539.307,319.891   538.157,320.658 536.819,321.616 536.624,321.999 535.857,323.341 534.52,324.491 534.324,325.065 533.369,325.639 533.369,325.83   533.753,326.213 533.94,326.405 534.52,327.555 534.52,328.13 534.324,328.896 533.94,329.088 533.94,329.472 534.324,329.854   534.707,330.813 534.707,331.196 535.669,332.921 535.286,332.921 535.091,332.921 534.902,332.921 534.324,332.538   533.753,332.346 533.174,332.154 532.986,332.154 532.791,332.154 532.407,332.154 527.042,332.921 526.275,331.004   526.087,331.004 525.509,330.046 524.938,329.472 524.554,329.28 523.976,328.896 523.787,328.322 523.209,327.747 523.209,327.363   522.254,326.98 521.676,326.98 521.292,326.405 520.909,326.213 520.338,325.83 519.759,325.639 519.376,325.065 517.654,324.491   516.505,323.532 515.543,322.382 514.588,322.191 512.867,321.616 512.484,321.232 512.484,321.041 512.101,320.849   509.223,321.616 506.923,323.149 506.734,324.299 506.352,324.874 506.156,325.065 505.201,328.322 501.368,326.405   501.173,326.213 500.219,326.213 497.535,325.639 493.702,324.491 492.553,324.491 491.786,324.682 491.02,324.874 489.486,325.065   489.291,325.257 489.104,325.639 488.337,325.83 488.142,326.022 487.188,325.639 486.804,325.065 486.804,324.682 486.608,324.299   486.225,323.532 486.037,323.149 485.842,322.766 485.653,322.574 485.271,322.382 484.309,322.382 483.925,322.766   481.438,323.149 481.242,323.341 481.054,323.724 480.858,324.299 480.671,325.449 480.671,325.83 480.287,326.213 480.092,326.98   479.904,327.172 479.521,327.555 479.138,328.705 478.754,329.088 478.559,329.28 478.176,329.663 477.987,329.854 477.604,330.238   477.221,330.813 477.221,331.196 477.409,332.921 476.643,333.113 476.454,332.921 476.071,332.729 475.688,332.346   475.492,331.963 474.343,331.58 474.154,331.388 473.959,332.538 473.771,333.304 473.192,333.304 473.005,333.304 472.426,332.921   471.472,332.346 470.51,332.346 469.938,332.154 468.977,331.963 468.405,331.388 468.405,331.196 467.827,330.43 467.827,330.238   467.639,329.663 467.443,329.472 467.256,329.28 466.105,326.789 465.91,326.597 465.534,326.405 464.768,326.405 463.618,326.405   462.271,326.597 461.89,326.022 461.506,325.639 461.318,325.065 460.935,324.682 460.552,324.682 459.206,324.491 457.868,324.107   456.906,323.724 456.719,323.916 456.523,325.065 455.373,328.322 455.186,328.896 454.605,329.472 454.036,328.896   452.886,330.621 452.69,330.813 452.69,331.58 452.886,331.771 453.073,332.154 453.457,332.538 453.84,333.113 453.84,333.496   454.036,333.688 454.224,334.071 454.419,335.221 454.419,335.413 454.036,335.796 453.652,336.179 452.886,336.946 452.69,337.137   451.541,336.371 451.354,336.179 450.774,335.604 450.391,335.221 450.008,334.837 449.241,334.646 447.324,334.071   446.175,334.071 445.986,334.263 445.604,334.646 445.408,335.029 444.837,334.837 444.453,334.646 443.491,334.263   443.108,333.496 442.92,333.304 442.342,332.538 441.958,332.154 441.575,332.154 441.191,332.346 440.809,332.154 439.658,331.004   439.658,331.004 438.704,330.813 437.554,330.43 436.787,330.621 436.592,330.43 436.209,329.854 436.021,329.663 "
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

export default Gangwon;
