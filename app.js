const WORKSHOP_LOGO_SVG = `<svg preserveAspectRatio="xMidYMid meet" role="img" aria-label="Workshop DIY" xmlns="http://www.w3.org/2000/svg" viewBox="77.139885 78.322945 253.991455 136.254120"><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M187.423706,152.869797C187.478333,152.738831,187.655853,152.631668,187.818207,152.631668C188.090317,152.631668,190.483124,151.543793,191.616806,150.904663C191.883423,150.754349,193.032593,149.992432,194.170502,149.211517C197.431274,146.973755,199.240906,146.236755,202.587189,145.783752C203.799835,145.619583,204.629318,145.619736,205.933762,145.784378C212.620331,146.628281,217.423569,150.723984,219.325882,157.203781C219.72139,158.550934,219.771454,162.692093,219.406631,163.88208C218.187943,167.857361,216.579514,170.301239,213.792847,172.411835C209.455261,175.697083,203.83429,176.563141,198.809494,174.720413C197.244873,174.146637,196.144424,173.544434,194.478638,172.350433C191.905991,170.506454,190.53334,169.740753,188.031555,168.754135L187.293335,168.462997L187.308884,160.785461C187.317429,156.56282,187.36911,153.000763,187.423706,152.869797zM208.415588,151.261307L201.927002,151.261307L201.927002,154.5056L208.415588,154.5056L208.415588,151.261307zM195.438385,167.485199L192.194092,167.485199L192.194092,151.263702L195.438385,151.263702L195.438385,167.485199zM214.904205,167.485199L211.659897,167.485199L211.659897,151.263702L214.904205,151.263702L214.904205,167.485199zM201.927002,173.973801L198.682693,173.973801L198.682693,164.240906L205.171295,164.240906L205.171295,160.996597L201.927002,160.996597L201.927002,157.752304L208.415588,157.752304L208.415588,167.485199L201.927002,167.485199L201.927002,173.973801z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M173.301086,159.585083C173.612106,158.491119,173.874039,158.032059,174.626434,157.262268C175.395889,156.475021,176.401733,155.870239,176.941635,155.870239C177.36203,155.870239,177.647339,155.263535,177.647339,154.369537C177.647339,153.240067,178.097351,153.01268,180.332611,153.01268C181.328247,153.01268,182.282974,153.064713,182.454239,153.128311C182.730774,153.231003,182.765625,154.070618,182.765625,160.629913C182.765625,166.947327,182.723099,168.050049,182.471725,168.251938C182.069794,168.574738,178.407364,168.435822,177.965607,168.081009C177.75119,167.908813,177.647324,167.518738,177.647324,166.885712L177.647324,165.94603L176.584106,165.490997C175.198334,164.897919,174.243912,164.070435,173.733398,163.019424C173.265182,162.055481,173.060654,160.43071,173.301086,159.585083z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M153.601929,182.059692C154.740814,179.364502,156.707062,177.959259,159.536469,177.818451C160.701721,177.760437,161.251312,177.831604,162.144165,178.156082C163.450592,178.630859,165.150406,180.036514,165.749542,181.137527L166.150391,181.874146L171.23761,181.874146C175.554565,181.874146,176.349976,181.830872,176.490891,181.588379C176.673401,181.274307,177.547806,179.367874,178.631622,176.921021C179.274582,175.469437,179.523499,174.921753,180.081848,173.730072L180.595093,172.634674L182.95993,172.634674C184.912933,172.634674,185.324768,172.683594,185.324768,172.915649C185.324768,173.07019,185.049423,173.777435,184.712891,174.487305C184.376358,175.197189,183.943024,176.163757,183.749908,176.635269C183.556793,177.106766,183.115692,178.092621,182.769699,178.826065C182.423691,179.559509,182.025787,180.416779,181.885452,180.73111C181.745102,181.045441,181.453796,181.6884,181.238083,182.159897C181.022369,182.631409,180.643311,183.488678,180.395737,184.064957C179.824722,185.394073,179.204605,186.048218,178.254486,186.3237C177.765457,186.465485,175.502716,186.541504,171.771988,186.541504L166.040741,186.541504L165.659912,187.255905C165.138397,188.234222,163.85675,189.437042,162.748398,189.988312C161.961212,190.379837,161.551163,190.446259,159.943237,190.442749C158.273651,190.439087,157.93721,190.378052,156.97731,189.904602C155.279343,189.067123,154.253754,187.938721,153.568604,186.154144C153.151855,185.06868,153.167999,183.086639,153.601929,182.059692z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M153.70961,134.681961C154.933441,131.8022,158.021027,130.114639,160.98288,130.70665C163.119888,131.133804,164.512604,132.063324,165.540604,133.74852L166.13118,134.71666L172.036896,134.724625C179.724121,134.734985,179.189514,134.531769,180.806213,138.05806C181.046387,138.58194,181.506516,139.56781,181.828705,140.248856C182.150894,140.929916,182.572266,141.873413,182.765106,142.34552C182.957932,142.817627,183.418945,143.846344,183.789566,144.631577C184.160187,145.416794,184.582855,146.359299,184.72879,146.726013C184.874741,147.092743,185.068542,147.474228,185.159454,147.573761C185.250381,147.673309,185.324768,147.911697,185.324768,148.103516C185.324768,148.42543,185.139572,148.448166,182.920441,148.398804C180.143387,148.337021,180.601318,148.697861,179.105072,145.392487C178.607056,144.292328,177.979095,142.920685,177.709595,142.344406C177.440109,141.768127,177.087021,140.996597,176.924942,140.629868C176.762878,140.263153,176.561615,139.834503,176.477676,139.677338C176.349091,139.436539,175.522827,139.383606,171.225388,139.340881L166.125702,139.290192L165.734726,140.000244C165.222015,140.931427,163.772217,142.287949,162.807831,142.738846C160.99057,143.588516,158.677109,143.612717,156.992996,142.799698C155.47348,142.066116,154.281479,140.67366,153.456284,138.668228C153.079697,137.753036,153.198425,135.884811,153.70961,134.681961z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M142.359467,157.940231C142.509399,157.475464,142.773041,156.807739,142.945313,156.45639C143.301086,155.73085,144.960602,154.086121,145.719666,153.706772C147.453094,152.840485,150.120728,152.779083,151.897141,153.564621C153.038162,154.069183,154.633179,155.561859,155.143616,156.602798L155.49057,157.310364L162.396606,157.310364L169.302643,157.310364L169.245392,159.621033L169.188141,161.931702L162.336823,161.983459L155.485474,162.035233L154.951477,162.917023C154.333344,163.937775,152.845825,165.267944,151.815979,165.720886C151.320953,165.938599,150.48027,166.037445,149.070404,166.043716C147.337799,166.051422,146.909668,165.986923,146.165497,165.606079C144.226196,164.613617,142.876617,163.016098,142.361877,161.103683C141.998642,159.754135,141.998108,159.060349,142.359467,157.940231z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M259.791718,157.665863L264.87912,148.034195L272.338226,148.034195L263.03244,163.730896L263.03244,174.991974L256.261322,174.991974L256.261322,164.07489L246.792618,148.034195L254.505173,148.034195L259.791718,157.665863z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M240.369812,152.741394L236.495438,152.741394L236.495438,170.284775L240.369812,170.284775L240.369812,174.991974L225.849915,174.991974L225.849915,170.284775L229.724304,170.284775L229.724304,152.741394L225.849915,152.741394L225.849915,148.034195L240.369812,148.034195L240.369812,152.741394z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M330.789734,195.730286L203.964523,195.730286L203.964523,199.334839L330.789734,199.334839L330.789734,195.730286z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M330.789551,203.350861L161.68924,203.350861L161.68924,206.955414L330.789551,206.955414L330.789551,203.350861z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M330.790314,210.972504L77.139885,210.972504L77.139885,214.577057L330.790314,214.577057L330.790314,210.972504z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M199.007599,92.751289L211.076767,107.812828L202.108658,108.433113L193.221268,96.996552L191.912918,99.119194L192.604614,109.090935L185.184021,109.604782L183.137482,80.08474L190.55806,79.571373L191.466415,92.675797L200.002396,78.91729L208.593674,78.322945L199.007599,92.751289z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M234.138016,81.615562C236.040375,81.751511,237.914093,82.153725,239.704468,82.81044C242.302017,83.709618,244.733612,85.0299,246.901871,86.718407L245.150757,93.244476L244.516693,93.074516L244.196808,92.630768C242.70787,90.69416,240.767151,89.152077,238.543442,88.138672C237.43634,87.647743,236.259094,87.333046,235.05455,87.206039C234.227158,87.13401,233.394257,87.239655,232.611099,87.515953C232.1866,87.685104,231.808258,87.952736,231.507553,88.296593C230.788803,89.172775,230.813843,90.439911,231.566635,91.287064C232.032272,91.758965,232.559708,92.165504,233.134735,92.49572C233.880844,92.934601,234.641342,93.348839,235.414795,93.73764L236.692566,94.414246C238.063751,95.136879,239.357956,95.996429,240.555618,96.979881C241.421173,97.700912,242.148926,98.572769,242.70343,99.552994C243.199982,100.455551,243.47139,101.464417,243.494675,102.49408C243.516479,104.315857,243.04805,106.109734,242.138275,107.688644C241.268204,109.142014,239.979233,110.299194,238.440216,111.008636C236.697495,111.816132,234.786774,112.195747,232.867447,112.115822C231.006363,112.044464,229.16304,111.7258,227.386139,111.168236C225.295883,110.581566,223.299759,109.70047,221.458069,108.551567C220.391022,107.90168,219.366867,107.183914,218.391983,106.402733L220.215729,99.607994L220.868774,99.782715L221.294846,100.371597C223.248032,102.98111,225.940598,104.943588,229.023956,106.004974C230.198563,106.381287,231.426422,106.56295,232.65976,106.542908C233.398315,106.50238,234.108765,106.246048,234.70285,105.805771C235.495346,105.106613,235.762222,103.987152,235.3703,103.006096C234.953918,102.254745,234.346375,101.627075,233.608734,101.186172C232.310593,100.437439,230.990005,99.728287,229.648743,99.059662L228.913788,98.6465C227.703781,97.972984,226.583435,97.149826,225.579315,96.196541C224.730804,95.402397,224.063187,94.435135,223.621811,93.360443C223.239136,92.341805,223.078842,91.253273,223.151657,90.167679C223.224899,88.937332,223.518707,87.730194,224.019104,86.603645C224.773438,84.973534,226.068161,83.653664,227.684143,82.867416C229.688202,81.891472,231.914063,81.459724,234.138016,81.615562z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M158.184418,89.408417L158.63797,89.460617C160.159576,89.664032,161.581177,90.331436,162.709152,91.371941C163.457062,92.134872,164.054443,93.031792,164.469971,94.015739C164.905151,94.958809,165.210938,95.956268,165.379028,96.981071C165.586273,98.309639,165.448776,99.669395,164.979736,100.929688C164.526001,102.206253,163.843109,103.389481,162.9646,104.421295L177.202927,111.835213L168.925079,115.537735L156.954742,109.003616L154.522186,110.091713L158.959137,119.99498L152.206207,123.015327L140.106628,96.007126L150.980728,91.143959C152.423172,90.469635,153.929443,89.940933,155.477051,89.56575C156.366608,89.378746,157.27916,89.325714,158.184418,89.408417zM154.518402,95.879517C153.797302,95.981628,153.094345,96.184746,152.429993,96.482941C151.30661,96.954544,150.192154,97.445801,149.086243,97.956879L152.344727,105.230492C153.226166,104.854858,154.099228,104.460068,154.963409,104.046356C155.701569,103.707794,156.398712,103.2864,157.041443,102.79026C157.931732,102.040565,158.426819,100.923943,158.384399,99.761368C158.265366,98.633255,157.799194,97.57048,157.049652,96.718483C156.493423,96.132034,155.708206,95.817314,154.900574,95.857086L154.518402,95.879517z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M272.812744,97.204483L266.643219,106.109734L274.967194,111.866898L281.13623,102.961639L287.252136,107.192093L270.397125,131.522263L264.281219,127.291809L271.751953,116.507477L263.428467,110.75032L255.957245,121.534653L249.841339,117.304688L266.69635,92.974518L272.812744,97.204483z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M123.532295,113.696442L124.230148,113.777771C126.158524,114.073517,128.005737,114.761353,129.657501,115.798744C132.481201,117.587387,134.876709,119.973488,136.675644,122.789276C137.85083,124.63147,138.576599,126.723907,138.794327,128.897644C139.033569,131.465439,138.466858,134.044128,137.172913,136.275513C135.587463,138.969635,133.343018,141.21608,130.649414,142.80484C127.777443,144.458344,124.36438,144.902039,121.164574,144.037842C119.23671,143.51442,117.427086,142.626587,115.833755,141.422424C113.593025,139.763062,111.674324,137.709213,110.171577,135.361511C108.996712,133.520187,108.266281,131.430969,108.038124,129.259201C107.781654,126.690132,108.338432,124.10524,109.629959,121.869064C111.213356,119.173782,113.45533,116.925095,116.146744,115.332764C118.378197,114.032959,120.960136,113.460907,123.532295,113.696442zM120.237076,120.379318L119.887573,120.406281C118.354965,120.610733,116.961685,121.401001,116.000389,122.611092C115.056374,123.703064,114.59684,125.132736,114.727959,126.569733C114.794571,127.523895,115.040863,128.456757,115.453972,129.31958C116.053543,130.618454,116.854576,131.814713,117.827431,132.864029C118.900902,134.079971,120.115646,135.163635,121.446014,136.092072C122.648727,136.917191,124.021584,137.461685,125.463211,137.685394C127.280067,137.943146,129.110855,137.312714,130.383087,135.991302C131.89679,134.496063,132.46991,132.291229,131.875671,130.248962C131.491013,128.764099,130.784729,127.381737,129.806686,126.199554C128.542725,124.617355,127.058746,123.224152,125.399681,122.062111C124.287796,121.300659,123.037567,120.763733,121.719482,120.481628C121.230911,120.390747,120.733513,120.356422,120.237076,120.379318z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M301.601013,126.300751L302.299225,126.387955C304.863129,126.784752,307.239716,127.969833,309.098511,129.778381C311.170715,131.775146,312.75058,134.224945,313.714081,136.935547C314.870911,140.295837,314.546234,143.989166,312.820984,147.096512C311.958069,148.639557,310.845917,150.029465,309.529388,151.210129C307.452698,153.100769,305.048676,154.597107,302.434753,155.626007C300.399414,156.423401,298.204712,156.731628,296.028259,156.525696C293.460388,156.265411,291.037109,155.212799,289.095093,153.514084C286.754761,151.440582,284.981323,148.806931,283.940704,145.859634C282.870056,142.725098,283.092163,139.293045,284.557861,136.322372C285.44342,134.53299,286.664185,132.92984,288.153931,131.599777C290.215515,129.722946,292.602142,128.237671,295.197113,127.216599C297.231812,126.41954,299.424255,126.105988,301.601013,126.300751zM301.796417,133.319016L301.395599,133.345963C299.740631,133.540878,298.142822,134.070938,296.699768,134.903717C295.098816,135.78006,293.62146,136.865036,292.306549,138.130219C291.264404,139.150299,290.465088,140.391296,289.96759,141.761612C289.36438,143.493225,289.630615,145.409592,290.682953,146.911621C291.859528,148.684113,293.91449,149.671082,296.034698,149.48201C297.567047,149.390991,299.06073,148.964966,300.410278,148.234055C302.207336,147.299255,303.861511,146.112946,305.322906,144.710876C306.284607,143.767151,307.052765,142.644867,307.584167,141.407135C308.377655,139.487228,308.077698,137.288376,306.798889,135.650696C305.90625,134.37352,304.502838,133.544434,302.952667,133.378418C302.570068,133.321472,302.182861,133.301575,301.796417,133.319016z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M330.52771,174.938004C330.907135,176.376419,331.109863,177.855667,331.131348,179.343048C331.140991,180.913391,330.788269,182.464722,330.100525,183.876755C329.284912,185.402817,327.990417,186.61911,326.415833,187.338638C324.171936,188.395706,321.654877,188.72998,319.212524,188.295227C317.964203,188.048447,316.787842,187.521973,315.772491,186.755524C314.332245,185.751999,313.161652,184.409088,312.364532,182.845856C311.819153,181.800247,311.407227,180.69043,311.138458,179.542328L310.207031,175.759995L300.801575,178.072845L299.023926,170.85611L327.780579,163.784363L330.52771,174.938004zM315.575714,174.43985L315.699463,174.941345C315.911407,175.872101,316.160706,176.794067,316.446716,177.704803C316.734985,178.68222,317.291321,179.559418,318.052795,180.237213C318.620514,180.667114,319.293762,180.936279,320.001617,181.016113C321.123322,181.060883,322.237854,180.828857,323.248352,180.340271C324.14624,179.851425,324.777618,178.986908,324.96933,177.983337C325.126617,177.021484,325.083862,176.037781,324.843781,175.09317C324.644379,174.164948,324.426147,173.241089,324.189056,172.321732L315.575714,174.43985z"/><path style="stroke:none;fill:currentColor;fill-rule:evenodd" d="M116.693192,163.543213L113.851212,171.179825L95.025467,169.25325L110.58651,179.953522L107.74453,187.590118L77.373581,184.299744L80.062973,177.072876L100.10704,180.173035L83.216843,168.597382L85.788689,161.686646L106.05442,164.191376L88.928635,153.248993L91.548454,146.207825L116.693192,163.543213z"/></svg>`;
const FOOTER_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABAGlDQ1BpY2MAABiVY2BgPMEABCwGDAy5eSVFQe5OChGRUQrsDxgYgRAMEpOLCxhwA6Cqb9cgai/r4lGHC3CmpBYnA+kPQKxSBLQcaKQIkC2SDmFrgNhJELYNiF1eUlACZAeA2EUhQc5AdgqQrZGOxE5CYicXFIHU9wDZNrk5pckIdzPwpOaFBgNpDiCWYShmCGJwZ3AC+R+iJH8RA4PFVwYG5gkIsaSZDAzbWxkYJG4hxFQWMDDwtzAwbDuPEEOESUFiUSJYiAWImdLSGBg+LWdg4I1kYBC+wMDAFQ0LCBxuUwC7zZ0hHwjTGXIYUoEingx5DMkMekCWEYMBgyGDGQCm1j8/yRb+6wAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH6gMKAjgH2Wn1xgAADEhJREFUeNrtmXtsVNedx7/n3Nfce2eu5+kZezx+MOMZO2PjOOAHBNdAbAR2Uchjo6br7YISqFiiRFrSKIrUAGLdpJtEVTdSkaJVUsRuVEVyE2GSUqALbDYP0WR5WCU2sbFj3MTYBgebuWPPzL1n/wCzxPEjJgmj1c5HOn/NOb97vt9zH7/fb4AMGTJkyJAhQ4YMGTL8f4R8F0FOnDgBURTJ5OQkALCampp06/r+eeutt2Cz2RCNRrPdbvdPNU3ba7PZXnW5XJtLSkp8kiThscceS/c2vx+OHTsGn8+HgoKCQlVVD1JKDQAMAKOUGrIsHwkEAkG73Y4XXngh3dudk1t6BO6++26Ew2HujTfeeFnX9a2Msa8GJQRWq/V3brf7X0zTZABAKQUhBBzHwTCMSZ7nvygtLb0Yj8fZoUOH0u3DwohGoygrKyuUJKkX109++qCUpnieHxcEYWzaGBcEYdRisZzyer0/AICDBw+mW9LCiEQiKC0tXSyK4shsBnyTYbVa31y9erW8ZMmStGnhbmVRfn4+JEkyLl261JRMJv0zzeF5flCSpKMcx3USQroEQThvtVr/SikdAJBlmqbFNM1cXdffGxoa6n3mmWdw9OjRtBmxIB555BEAgNvt/lue58cx7WR5no+53e4tr7/+Or3nnnv4UCjENzU1CY8//rj84IMPyna7/Z8JIQwAs9lsezdv3iysXLky3bIWxtKlS9HQ0CC4XK6tkiR18TyvcxwXkyTprMfj+emGDRvE+vr6r63zer0oKCioEAThrwCYIAiDeXl5d2VnZ6dFxy09AgDw+eefIxKJmGVlZR/ruv6WIAh/UFX13zwez6/Xrl17bHx83Jjp7V5TU4OHH3545P333w8lEomljDErpXRsZGTk8Icffoienp7basB3kgkuFLvdDlmWVwwPD+9PpVIOURR78vLy1iaTye4LFy58bf6KFStgs9m4c+fO+ePxeDiVShUCUE3THLZYLN1Op/PT1tbW0fb2drzyyivpkLQw7rzzTtTX10s2m+3fOY5jPM+bHo/nZwCwY8eOG/Nqa2tx77330kAgUKNp2iuiKHZzHBenlDJCCKOUGjzPfynL8gm73f50KBQKAMC2bdvSLXFuPvroI8iyjOLi4ny/3/83Lpfr4YKCgmWMMbJ7927s3LkTAFBSUpJtt9t3CYIwOPXSnG0QQkyLxXLK7XY379ixg6xevTrdMhfO8PAwQqEQlixZIhYWFq5yuVxtoiheJoSYuCnBEgRhRBCEIUEQhniev0wIMQkhSUEQRlVVPZebm/sQAKxfv37ea36jl2BLSwuWLVtGGGNWURSV6upq9PT0pHJzc3HgwIEFidy2bRueeuopDAwMqPF43BoIBMT6+vqk2+1mbW1t0sWLF9cMDAzsSiQSf+fz+XYxxg5PTEysY4xJAKAoyoVQKPQjURRfttvtr1JKP5yYmPghIaQvOzv7AdM0Px4fH3/W5/Od7OrqGmhtbcXhw4dv7UQ2bdoEl8uFwsLCfE3TfmmxWN4XBOG/FUV5x+12t9TU1Ejl5eULillUVIRgMOizWq1vchx3WlGUQyUlJYX5+fnIycmJiKI4AICpqvrpunXrsh0ORwXHcaNTd4Cqqr1VVVVLwuGwPxqN5ng8nrWU0nFCyEmO42wWi+VOSukVTdPeXLNmjbJ8+fI598PP9WN7eztsNltgcHDwXycnJxunip5kMonJycmVnZ2dRbW1tc/zPJ88efLkvOLz8/ORm5srdXV1rY7H442GYajJZPLLVCrlSCQSffF4XEilUtLU/OlFFgDE4/G8M2fO7GeMpa7PERlj1usGTa0zdV1v7OjoWKbr+p9uyYCGhgYcOXIEyWRy283ipzAMQ47FYv/4wQcfjMZisS6e5+kMYYjVav2yoaHho1OnTqUAuM6cOfMLXdd/ZBiGOiVS13XIsgyv16t0dnaK1xsrs0EAyABMACCEzKjBMAw1Ho83X7ly5U/bt2/HSy+9tDADxsbGUFVV5ezo6Gic6SQAIJVK2cfHx381tZnpMMY4XdePf/LJJ+u7u7tTdrt9aywW22ya5lfyD8MwYJomMU1TYowRURTP+f3+tYZh9Pb399928cAc5fCcrl0rYBRca0zMiGmaNJlMytOHYRgWxhghhDBRFF/v7e3tLSsrS4t4YJ6W2GxwHAdCyBeU0j4AnpnmCIIwKEnSGdxUklJKQSlliUTiqiAIHVlZWb9RVTUtt/63MmDp0qXYu3fvZafTuSeZTN4x1d66yaCYpmk/37lz529PnjxJGWOglEJVVXi9XiiKYmzcuNGIxWLIy8tLm3jgWxRDPp8PsiwLY2Njfx+LxR43DKMAAOE4blCW5Zc8Hs+ruq4nBwYG0irwezMAADZs2IDS0lLS1tbmNU0zQCmlkiR9UV1dfWF4eJjt378/3foyZMiQIUOGDBkyZMiQIcNM/A+SuM25qDqHNQAAAB50RVh0aWNjOmNvcHlyaWdodABHb29nbGUgSW5jLiAyMDE2rAszOAAAABR0RVh0aWNjOmRlc2NyaXB0aW9uAHNSR0K6kHMHAAAAAElFTkSuQmCC';

/* ═══════ SOUND EFFECTS ═══════ */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
let soundEnabled = localStorage.getItem('hajj-sound') !== 'off';

function playSound(type) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.08;
    var t = audioCtx.currentTime;
    switch (type) {
      case 'click':
        osc.frequency.value = 800; osc.type = 'sine';
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);
        osc.start(t); osc.stop(t + 0.08); break;
      case 'success':
        osc.frequency.value = 523; osc.type = 'sine';
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
        osc.start(t); osc.stop(t + 0.3);
        var osc2 = audioCtx.createOscillator();
        var gain2 = audioCtx.createGain();
        osc2.connect(gain2); gain2.connect(audioCtx.destination);
        gain2.gain.value = 0.08; osc2.frequency.value = 659; osc2.type = 'sine';
        gain2.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
        osc2.start(t + 0.15); osc2.stop(t + 0.4); break;
      case 'error':
        osc.frequency.value = 200; osc.type = 'square';
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.start(t); osc.stop(t + 0.25); break;
    }
  } catch(e) {}
}

/* ═══════ TOAST NOTIFICATIONS ═══════ */
var toastTimer = null;
function showToast(msg, autoHideMs) {
  var el = document.getElementById('toastIndicator');
  var t = document.getElementById('toastMessage');
  if (el && t) { t.textContent = msg; el.style.display = 'block'; }
  if (toastTimer) clearTimeout(toastTimer);
  if (autoHideMs > 0) toastTimer = setTimeout(hideToast, autoHideMs);
}
function hideToast() {
  var el = document.getElementById('toastIndicator');
  if (el) el.style.display = 'none';
  if (toastTimer) { clearTimeout(toastTimer); toastTimer = null; }
}

/* ═══════ SPLASH SCREEN ═══════ */
var splashTimer;
function dismissSplash() {
  var s = document.getElementById('splash');
  if (!s) return;
  s.classList.add('hidden');
  if (splashTimer) clearTimeout(splashTimer);
  setTimeout(function() { s.remove(); }, 600);
  playSound('click');
}
// Make globally accessible for onclick
window.dismissSplash = dismissSplash;

/* ═══════ TYPEWRITER EFFECT ═══════ */
function sleep(ms) { return new Promise(function(r) { setTimeout(r, ms); }); }
async function typewriterAppend(element, text) {
  element.classList.add('typing');
  element.textContent = '';
  for (var i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await sleep(12 + Math.random() * 18);
  }
  element.classList.remove('typing');
}

/* ═══════ HIJRI CALENDAR ═══════ */
function calcHijriDate() {
  try {
    return new Intl.DateTimeFormat('ar-SA-u-ca-islamic-umalqura', {
      day: 'numeric', month: 'long', year: 'numeric'
    }).format(new Date());
  } catch(e) { return ''; }
}

/* ═══════ SMART TICKER ═══════ */
var lang = localStorage.getItem('hajj-lang') || 'fr';
var _tickerTimer = null;

var TICKER_TIPS = {
  fr: [
    "Apprenez la Talbiyah par cœur avant de partir",
    "Portez toujours votre bracelet d'identification",
    "Hydratez-vous : buvez de l'eau Zamzam régulièrement",
    "Priez Fajr en jamaah — récompense énorme à La Mecque",
    "Tawaf plus calme entre 2h et 5h du matin",
    "Coupez vos ongles avant d'entrer en Ihram",
    "Mémorisez le nom et le quartier de votre hôtel",
    "Le dua à Arafat est le cœur du Hajj",
    "Portez des sandales adaptées — vous marcherez des km",
    "Gardez des photocopies de vos documents séparément",
    "La patience est un acte d'adoration pendant le Hajj",
    "Soyez bon envers vos compagnons de voyage",
    "Récitez la Talbiyah à chaque occasion",
    "Le Hajj accepté efface tous les péchés passés",
    "Planifiez le Tawaf de Wida avant votre départ",
  ],
  ar: [
    "احفظ التلبية قبل السفر",
    "احمل دائماً بطاقة تعريفك",
    "اشرب من ماء زمزم باستمرار",
    "صلِّ الفجر في جماعة — أجر عظيم في مكة",
    "الطواف أهدأ بين الساعة ٢ و٥ صباحاً",
    "قص أظافرك قبل الإحرام",
    "احفظ اسم فندقك وحيّه",
    "الدعاء في عرفة هو سر الحج",
    "ارتدِ نعلاً مريحة — ستمشي كيلومترات",
    "احتفظ بنسخ وثائقك في مكان آخر",
    "الصبر عبادة في الحج",
    "أحسن معاملة رفقاء السفر",
    "ردد التلبية في كل فرصة",
    "الحج المبرور يمحو الذنوب السابقة",
    "خطط لطواف الوداع قبل مغادرتك",
  ],
  en: [
    "Memorise the Talbiyah before you leave",
    "Always wear your identification bracelet",
    "Stay hydrated — drink Zamzam water often",
    "Pray Fajr in congregation — great reward in Makkah",
    "Tawaf is quieter between 2am and 5am",
    "Trim your nails before entering Ihram",
    "Memorise your hotel name and district",
    "The dua at Arafat is the heart of Hajj",
    "Wear comfortable sandals — you will walk kilometres",
    "Keep copies of your documents separately",
    "Patience is an act of worship during Hajj",
    "Be kind to your fellow pilgrims",
    "Recite Talbiyah at every opportunity",
    "An accepted Hajj wipes away all past sins",
    "Plan your Farewell Tawaf before departure",
  ]
};

function getTickerContext() {
  var MINA    = new Date('2026-06-24');
  var ARAFAT  = new Date('2026-06-25');
  var EID     = new Date('2026-06-26');
  var TASH1   = new Date('2026-06-27');
  var TASH2   = new Date('2026-06-28');
  var TASH3   = new Date('2026-06-29');
  var END     = new Date('2026-06-30');
  var today = new Date(); today.setHours(0,0,0,0);
  function same(d) { return today.getTime() === d.getTime(); }
  var ar = lang === 'ar';
  var en = lang === 'en';
  if (today >= END)    return ar ? '🤲 تقبّل الله حجّكم' : en ? '🤲 May Allah accept your Hajj' : '🤲 Qu\'Allah accepte votre Hajj';
  if (same(TASH3))     return ar ? '👋 اليوم: النفر الثاني — وداع منى' : en ? '👋 Today: Farewell from Mina' : '👋 Aujourd\'hui : départ de Mina';
  if (same(TASH2))     return ar ? '🪨 اليوم: رمي الجمرات' : en ? '🪨 Today: Stoning of Jamarat' : '🪨 Aujourd\'hui : lapidation des Jamarat';
  if (same(TASH1))     return ar ? '🪨 اليوم: أول رمي الجمرات' : en ? '🪨 Today: First stoning of Jamarat' : '🪨 Aujourd\'hui : 1ère lapidation';
  if (same(EID))       return ar ? '🎉 اليوم: العيد — الذبح والحلق وطواف الإفاضة' : en ? '🎉 Today: Eid — sacrifice, shave, Tawaf Ifada' : '🎉 Aujourd\'hui : Aïd — sacrifice, rasage, Tawaf';
  if (same(ARAFAT))    return ar ? '⛰️ اليوم: الوقوف بعرفة — أعظم يوم في الحج' : en ? '⛰️ Today: Standing at Arafat — the greatest day' : '⛰️ Aujourd\'hui : Wuquf à Arafat — jour capital';
  if (same(MINA))      return ar ? '🏕️ اليوم: التوجه إلى منى' : en ? '🏕️ Today: Departure to Mina' : '🏕️ Aujourd\'hui : départ pour Mina';
  var days = Math.ceil((MINA - today) / 86400000);
  if (days > 0) return ar ? '⏳ الحج بعد ' + days + ' يوم' : en ? '⏳ Hajj in ' + days + ' days' : '⏳ Hajj dans ' + days + ' jours';
  return '';
}

function getTickerChecklist() {
  var saved = JSON.parse(localStorage.getItem('hajj-checklist') || '{}');
  var checked = Object.values(saved).filter(Boolean).length;
  var total = 0;
  if (typeof HAJJ_DATA !== 'undefined' && HAJJ_DATA.checklist) {
    HAJJ_DATA.checklist.forEach(function(cat) { total += (cat.items || []).length; });
  }
  if (total === 0) return '';
  var pct = Math.round(checked / total * 100);
  var ar = lang === 'ar';
  var en = lang === 'en';
  return ar ? '✅ الاستعداد: ' + checked + '/' + total + ' (' + pct + '%)' :
         en ? '✅ Readiness: ' + checked + '/' + total + ' (' + pct + '%)' :
              '✅ Préparation : ' + checked + '/' + total + ' (' + pct + '%)';
}

var TICKER_DUAS = {
  fr: [
    { ar: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ', fr: 'Talbiyah — Me voici ô Allah, me voici' },
    { ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً', fr: 'Notre Seigneur, donne-nous le bien ici-bas et dans l\'au-delà' },
    { ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ', fr: 'Ô Allah, je Te demande le pardon et la santé' },
    { ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', fr: 'Gloire à Allah et louange à Lui' },
    { ar: 'اللَّهُمَّ تَقَبَّلْ مِنِّي', fr: 'Ô Allah, accepte de moi' },
    { ar: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', fr: 'Il n\'y a de dieu qu\'Allah, seul, sans associé' },
    { ar: 'اللَّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ', fr: 'Ô Allah, pardonne-moi et pardonne à mes parents' },
    { ar: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', fr: 'Allah nous suffit, Il est le meilleur garant' },
    { ar: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي', fr: 'Ô Allah, j\'ai fait du tort à mon âme — pardonne-moi' },
    { ar: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ الْأَعَزُّ الْأَكْرَمُ', fr: 'Seigneur, pardonne et fais miséricorde, Tu es le Plus Puissant' },
  ],
  ar: [
    { ar: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ', label: 'التلبية' },
    { ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً', label: 'دعاء المأثور' },
    { ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ', label: 'دعاء العافية' },
    { ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', label: 'تسبيح' },
    { ar: 'اللَّهُمَّ تَقَبَّلْ مِنِّي', label: 'دعاء القبول' },
    { ar: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', label: 'توحيد' },
    { ar: 'اللَّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ', label: 'دعاء للوالدين' },
    { ar: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', label: 'توكل' },
    { ar: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي فَاغْفِرْ لِي', label: 'استغفار' },
    { ar: 'رَبِّ اغْفِرْ وَارْحَمْ وَأَنْتَ الْأَعَزُّ الْأَكْرَمُ', label: 'دعاء الرحمة' },
  ],
  en: [
    { ar: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ', en: 'Talbiyah — Here I am O Allah, here I am' },
    { ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً', en: 'Our Lord, give us good in this world and the next' },
    { ar: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ', en: 'O Allah, I ask You for pardon and wellbeing' },
    { ar: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', en: 'Glory and praise be to Allah' },
    { ar: 'اللَّهُمَّ تَقَبَّلْ مِنِّي', en: 'O Allah, accept from me' },
    { ar: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ', en: 'There is no god but Allah, alone, with no partner' },
    { ar: 'اللَّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ', en: 'O Allah, forgive me and my parents' },
    { ar: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', en: 'Allah is sufficient for us, the best disposer of affairs' },
    { ar: 'اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي', en: 'O Allah, I have wronged my soul — forgive me' },
    { ar: 'رَبِّ اغْفِرْ وَارْحَمْ', en: 'My Lord, forgive and have mercy — You are the Mightiest' },
  ]
};

function getTickerTip() {
  var tips = (lang === 'ar') ? TICKER_TIPS.ar :
             (lang === 'en') ? TICKER_TIPS.en : TICKER_TIPS.fr;
  var dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return '💡 ' + tips[dayOfYear % tips.length];
}

function getTickerDua() {
  var ar = lang === 'ar';
  var en = lang === 'en';
  var duas = ar ? TICKER_DUAS.ar : en ? TICKER_DUAS.en : TICKER_DUAS.fr;
  var dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  var d = duas[(dayOfYear + 3) % duas.length]; // offset so dua != tip on same day
  if (ar) return '🤲 ' + d.ar + ' — ' + d.label;
  if (en) return '🤲 ' + d.ar + ' — ' + d.en;
  return '🤲 ' + d.ar + ' — ' + d.fr;
}

function startTicker() {
  var el = document.getElementById('tickerText');
  if (!el) return;
  if (_tickerTimer) clearInterval(_tickerTimer);

  var hijri = calcHijriDate();
  var sep = '        ◆        ';
  var items = [
    getTickerContext(),
    getTickerChecklist(),
    getTickerTip(),
    getTickerDua(),
    hijri ? '📅 ' + hijri : ''
  ].filter(Boolean);
  if (!items.length) return;

  var text = items.join(sep) + sep;
  // Two identical clones side by side — animate -50% = exactly one copy width, seamless loop
  el.innerHTML = '<span class="tc">' + text + '</span><span class="tc" aria-hidden="true">' + text + '</span>';
  el.style.animation = 'none';
  el.offsetWidth; // force reflow
  var duration = Math.max(20, text.length * 0.14);
  el.style.animation = 'tickerMarquee ' + duration + 's linear infinite';
}

/* ═══════ NIGHT MODE AUTO-DETECT ═══════ */
function initNightMode() {
  var manual = localStorage.getItem('hajj-th');
  if (manual) return; // user already chose a theme
  var hour = new Date().getHours();
  var isNight = hour >= 21 || hour < 6;
  if (isNight) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      var sunset = calcSunset(pos.coords.latitude, pos.coords.longitude);
      var now = new Date();
      var nowMins = now.getHours() * 60 + now.getMinutes();
      if (nowMins >= sunset || nowMins < 360) {
        if (!localStorage.getItem('hajj-th')) {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      }
    }, function() {}, { timeout: 3000 });
  }
}
function calcSunset(lat, lng) {
  var d = new Date();
  var N = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
  var radLat = lat * Math.PI / 180;
  var decl = -23.45 * Math.cos(2 * Math.PI / 365 * (N + 10)) * Math.PI / 180;
  var ha = Math.acos(-Math.tan(radLat) * Math.tan(decl)) * 180 / Math.PI;
  return Math.round(720 + (ha * 4) - (lng * 4) + d.getTimezoneOffset());
}

/* ═══════ SHAKE TO REPORT ═══════ */
function initShakeReport() {
  if (!window.DeviceMotionEvent) return;
  var lastShake = 0;
  window.addEventListener('devicemotion', function(e) {
    var acc = e.accelerationIncludingGravity;
    if (!acc) return;
    var force = Math.abs(acc.x) + Math.abs(acc.y) + Math.abs(acc.z);
    if (force > 25 && Date.now() - lastShake > 2000) {
      lastShake = Date.now();
      generateBugReport();
    }
  });
}
function generateBugReport() {
  var report = {
    app: 'Hajj Guide 2026',
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    screen: screen.width + 'x' + screen.height,
    viewport: innerWidth + 'x' + innerHeight,
    theme: document.documentElement.dataset.theme,
    lang: localStorage.getItem('hajj-lang') || 'fr'
  };
  var blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'hajj-bug-report-' + Date.now() + '.json';
  a.click(); URL.revokeObjectURL(url);
  showToast('Bug report exported', 2000);
  playSound('success');
}

/* ═══════ DHIKR COUNTER ═══════ */
var dhikrCount = 0;
var dhikrOpen = false;
window.incrementDhikr = function() {
  dhikrCount++;
  playSound('click');
  var counter = document.getElementById('dhikrCounter');
  if (counter) counter.textContent = dhikrCount;
};
window.toggleDhikr = function() {
  dhikrOpen = !dhikrOpen;
  var bar = document.getElementById('dhikrBar');
  if (bar) bar.style.display = dhikrOpen ? 'flex' : 'none';
  if (dhikrOpen) { dhikrCount = 0; var c = document.getElementById('dhikrCounter'); if (c) c.textContent = '0'; }
};

/* ═══════ BREATHING GUIDE ═══════ */
var breathingActive = false;
window.toggleBreathing = function() {
  breathingActive = !breathingActive;
  document.querySelectorAll('.deco-band').forEach(function(b) {
    b.classList.toggle('breathing', breathingActive);
  });
  if (breathingActive) {
    showToast('🫁 Breathing guide ON', 2000);
  } else {
    showToast('🫁 Breathing guide OFF', 1500);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  let tab = 'monhajj', fcIdx = 0;
  let checked = JSON.parse(localStorage.getItem('hajj-ck') || '{}');
  let done = JSON.parse(localStorage.getItem('hajj-done') || '{}');
  lang = localStorage.getItem('hajj-lang') || 'fr'; // uses global lang
  let fcs = [...(D('flashcards'))];

  // Arabic UI translations
  const AR = {
    logoTitle: 'دليل الحج',
    searchPlaceholder: 'ابحث عن موضوع، شعيرة، دعاء...',
    tabMonHajj: 'حجّي', tabApprendre: 'تعلّم', tabPreparer: 'استعد', tabPlus: 'المزيد',
    footText: '🕋 دليل الحج — تقبّل الله حجّكم 🤲',
    // Sub-tabs Apprendre
    learnSteps: '🚶 خطوة بخطوة', learnDays: '📅 الأيام', learnRituals: '🕌 المناسك',
    learnDuas: '🤲 الأدعية', learnClothing: '👘 اللباس', learnClassif: '📊 المستويات',
    learnTypes: '⚖️ أنواع الحج', learnMap: '🗺️ الخريطة', learnOmra: '🕌 العمرة',
    // Sub-tabs Préparer
    prepChecklist: '✅ قائمة التحضير', prepDates: '🗓️ المواعيد',
    prepCosts: '💰 التكاليف', prepApps: '📱 التطبيقات', prepNusuk: '🌐 نسك',
    // Filter buttons
    filterAll: 'الكل', filterDocs: '📄 وثائق', filterClothes: '👘 ملابس',
    filterHealth: '💊 صحة', filterMisc: '🎒 متنوع',
    // Companion guide
    companionTitle: '🧑‍🏫 دليل المرافق — يوماً بيوم',
    scheduleTitle: '⏰ برنامج اليوم', duasTitle: '🤲 الأدعية الأساسية',
    packTitle: '🎒 ما تحمله', alertsTitle: '🚨 تنبيهات',
    youAreHere: '📍 أنت هنا : ',
    dayNames: ['🏕️ يوم ١ - منى','⛰️ يوم ٢ - عرفة','🎉 يوم ٣ - العيد','🪨 يوم ٤ - التشريق','👋 يوم ٥ - الوداع'],
    dayLocations: ['مكة ← منى','منى ← عرفة','منى · مكة','منى','مكة'],
    mapLabels: ['الكعبة','منى','عرفة','مزدلفة','الجمرات'],
    // Plus grid
    plusFaq: 'أسئلة شائعة', plusErrors: '❌ أخطاء شائعة', plusPractical: 'مسائل عملية',
    plusQuiz: 'اختبار', plusHealth: 'الصحة', plusHeat: 'مواجهة الحر',
    plusHandicap: 'ذوي الاحتياجات', plusTour: 'جولة افتراضية',
    plusMedina: 'دليل المدينة', plusLinks: 'روابط مفيدة',
    plusGroupQA: '❓ أسئلة وأجوبة', plusGroupHealth: '🛡️ الصحة والسلامة', plusGroupDiscover: '🕌 اكتشف',
    backBtn: 'رجوع ←',
    // Section titles for Arabic
    sectionRituals: '🕌 المناسك العشر للحج', sectionRitualsDesc: 'كل منسك بالتفصيل مع التاريخ والأحكام',
    sectionHealth: '❤️ نصائح صحية للحاج', sectionFaq: '❓ أسئلة شائعة',
    sectionErrors: '❌ أكثر ١٠ أخطاء شائعة في الحج',
    sectionChecklist: '✅ قائمة التحضير للحج', sectionMap: '🗺️ خريطة المسافات',
    sectionClassif: '📊 أركان / واجبات / سنن', sectionTypes: '⚖️ أنواع الحج الثلاثة',
    sectionClothing: '👘 لباس الإحرام', sectionDuas: '🤲 الأدعية الأساسية',
    sectionCosts: '💰 تكاليف الحج حسب البلد', sectionDates: '🗓️ مواعيد الحج ٢٠٢٦',
    sectionApps: '📱 التطبيقات الموصى بها', sectionNusuk: '🌐 منصة نسك',
    bestPractice: '💡 حسن التطبيق', history: '📜 التاريخ', rules: '🚫 المحظورات',
    tipLabel: '💡 نصيحة', errorsLabel: '⚠️ أخطاء يجب تجنبها',
    progressSteps: 'خطوات',
    steps: 'خطوات', googleCal: '📅 جوجل', outlookCal: '📧 أوتلوك', icsCal: '🍎 .ics',
    addAllTitle: '📅 أضف كل البرنامج إلى تقويمك',
    addAllDesc: '15 حدثاً بتوقيت مكة المكرمة، مع تنبيهات قبل ساعة و15 دقيقة',
    downloadIcs: '📅 تحميل .ics (15 حدث)', addToGoogle: '📅 إضافة الكل لجوجل',
    seeEvents: '📋 عرض الأحداث الـ 15',
    sectionChecklist: '✅ قائمة التحضير', sectionMap: '🗺️ خريطة المسافات', sectionDuas: '🤲 الأدعية الأساسية'
  };

  const FR = {
    logoTitle: 'Guide du Hajj',
    searchPlaceholder: 'Rechercher un sujet, un rituel, un dua...',
    tabMonHajj: 'Mon Hajj', tabApprendre: 'Apprendre', tabPreparer: 'Préparer', tabPlus: 'Plus',
    footText: '🕋 Guide du Hajj — Qu\'Allah accepte votre Hajj 🤲',
    learnSteps: '🚶 Pas à Pas', learnDays: '📅 Jours', learnRituals: '🕌 Rituels',
    learnDuas: '🤲 Duas', learnClothing: '👘 Tenue', learnClassif: '📊 Niveaux',
    learnTypes: '⚖️ 3 Types', learnMap: '🗺️ Carte', learnOmra: '🕌 Omra',
    prepChecklist: '✅ Checklist', prepDates: '🗓️ Dates',
    prepCosts: '💰 Coûts', prepApps: '📱 Apps', prepNusuk: '🌐 Nusuk',
    filterAll: 'Tout', filterDocs: '📄 Docs', filterClothes: '👘 Habits',
    filterHealth: '💊 Santé', filterMisc: '🎒 Divers',
    companionTitle: '🧑‍🏫 Guide du Compagnon — Jour par Jour',
    scheduleTitle: '⏰ Programme de la journée', duasTitle: '🤲 Duas essentielles',
    packTitle: '🎒 À emporter', alertsTitle: '🚨 Alertes',
    youAreHere: '📍 Vous êtes ici : ',
    dayNames: ['🏕️ Jour 1 - Mina','⛰️ Jour 2 - Arafat','🎉 Jour 3 - Aïd','🪨 Jour 4 - Tashriq','👋 Jour 5 - Adieu'],
    dayLocations: ['Makkah → Mina','Mina → Arafat','Mina · Makkah','Mina','Makkah'],
    mapLabels: ['Kaaba','Mina','Arafat','Muzdalifa','Jamarat'],
    plusFaq: 'FAQ', plusErrors: 'Top 10 Erreurs', plusPractical: 'Questions Pratiques',
    plusQuiz: 'Quiz', plusHealth: 'Santé', plusHeat: 'Survie Chaleur',
    plusHandicap: 'Accessibilité', plusTour: 'Tour Virtuel',
    plusMedina: 'Guide Médine', plusLinks: 'Liens Utiles',
    plusGroupQA: '❓ Questions & Réponses', plusGroupHealth: '🛡️ Santé & Sécurité', plusGroupDiscover: '🕌 Découvrir',
    backBtn: '← Retour',
    steps: 'étapes',
    googleCal: '📅 Google', outlookCal: '📧 Outlook', icsCal: '🍎 .ics',
    addAllTitle: '📅 Ajouter tout le programme à votre calendrier',
    addAllDesc: '15 événements · horaires La Mecque · rappels 1h et 15min avant',
    downloadIcs: '📅 Télécharger .ics (15 événements)', addToGoogle: '📅 Tout ajouter à Google',
    seeEvents: '📋 Voir les 15 événements inclus',
    sectionRituals: '🕌 Les 10 Rituels du Hajj', sectionRitualsDesc: 'Chaque rituel en détail avec son histoire et ses règles',
    sectionHealth: '❤️ Conseils Santé', sectionFaq: '❓ Questions Fréquentes',
    sectionErrors: '❌ Top 10 Erreurs', sectionClassif: '📊 Arkaan / Wajibaat / Sunan',
    sectionTypes: '⚖️ Les 3 Types de Hajj', sectionClothing: '👘 Tenue & Ihram',
    sectionCosts: '💰 Coûts par Pays', sectionDates: '🗓️ Dates 2026',
    sectionApps: '📱 Apps Recommandées', sectionNusuk: '🌐 Nusuk',
    bestPractice: '💡 Bonne pratique', history: '📜 Histoire', rules: '🚫 Règles',
    tipLabel: '💡 Conseil', errorsLabel: '⚠️ Erreurs à éviter', progressSteps: 'étapes',
    sectionChecklist: '✅ Checklist', sectionMap: '🗺️ Carte des Distances', sectionDuas: '🤲 Duas Essentielles'
  };

  const EN = {
    logoTitle: 'Hajj Guide',
    searchPlaceholder: 'Search a topic, ritual, dua...',
    tabMonHajj: 'My Hajj', tabApprendre: 'Learn', tabPreparer: 'Prepare', tabPlus: 'More',
    footText: '🕋 Hajj Guide — May Allah accept your Hajj 🤲',
    learnSteps: '🚶 Step by Step', learnDays: '📅 Days', learnRituals: '🕌 Rituals',
    learnDuas: '🤲 Duas', learnClothing: '👘 Clothing', learnClassif: '📊 Levels',
    learnTypes: '⚖️ 3 Types', learnMap: '🗺️ Map', learnOmra: '🕌 Umrah',
    prepChecklist: '✅ Checklist', prepDates: '🗓️ Dates',
    prepCosts: '💰 Costs', prepApps: '📱 Apps', prepNusuk: '🌐 Nusuk',
    filterAll: 'All', filterDocs: '📄 Docs', filterClothes: '👘 Clothes',
    filterHealth: '💊 Health', filterMisc: '🎒 Misc',
    companionTitle: '🧑‍🏫 Companion Guide — Day by Day',
    scheduleTitle: '⏰ Today\'s Schedule', duasTitle: '🤲 Essential Duas',
    packTitle: '🎒 What to Bring', alertsTitle: '🚨 Alerts',
    youAreHere: '📍 You are here: ',
    dayNames: ['🏕️ Day 1 - Mina','⛰️ Day 2 - Arafat','🎉 Day 3 - Eid','🪨 Day 4 - Tashriq','👋 Day 5 - Farewell'],
    dayLocations: ['Makkah → Mina','Mina → Arafat','Mina · Makkah','Mina','Makkah'],
    mapLabels: ['Kaaba','Mina','Arafat','Muzdalifa','Jamarat'],
    plusFaq: 'FAQ', plusErrors: 'Top 10 Mistakes', plusPractical: 'Practical Questions',
    plusQuiz: 'Quiz', plusHealth: 'Health', plusHeat: 'Heat Survival',
    plusHandicap: 'Accessibility', plusTour: 'Virtual Tour',
    plusMedina: 'Medina Guide', plusLinks: 'Useful Links',
    plusGroupQA: '❓ Questions & Answers', plusGroupHealth: '🛡️ Health & Safety', plusGroupDiscover: '🕌 Discover',
    backBtn: '← Back',
    steps: 'steps',
    googleCal: '📅 Google', outlookCal: '📧 Outlook', icsCal: '🍎 .ics',
    addAllTitle: '📅 Add entire schedule to your calendar',
    addAllDesc: '15 events · Makkah time · reminders 1h and 15min before',
    downloadIcs: '📅 Download .ics (15 events)', addToGoogle: '📅 Add all to Google',
    seeEvents: '📋 View all 15 events',
    sectionRituals: '🕌 The 10 Rituals of Hajj', sectionRitualsDesc: 'Each ritual in detail with history and rules',
    sectionHealth: '❤️ Health Tips', sectionFaq: '❓ Frequently Asked Questions',
    sectionErrors: '❌ Top 10 Mistakes', sectionClassif: '📊 Arkaan / Wajibaat / Sunan',
    sectionTypes: '⚖️ The 3 Types of Hajj', sectionClothing: '👘 Clothing & Ihram',
    sectionCosts: '💰 Costs by Country', sectionDates: '🗓️ Dates 2026',
    sectionApps: '📱 Recommended Apps', sectionNusuk: '🌐 Nusuk',
    bestPractice: '💡 Best practice', history: '📜 History', rules: '🚫 Rules',
    tipLabel: '💡 Tip', errorsLabel: '⚠️ Mistakes to avoid', progressSteps: 'steps',
    sectionChecklist: '✅ Checklist', sectionMap: '🗺️ Distance Map', sectionDuas: '🤲 Essential Duas'
  };

  function T(key) { return (lang === 'ar' ? AR : lang === 'en' ? EN : FR)[key] || key; }

  // Helper: pick data by language (tries Ar/En suffix, falls back to French default)
  function D(base) {
    if (lang === 'ar' && HAJJ_DATA[base + 'Ar']) return HAJJ_DATA[base + 'Ar'];
    if (lang === 'en' && HAJJ_DATA[base + 'En']) return HAJJ_DATA[base + 'En'];
    return HAJJ_DATA[base];
  }

  function applyLang() {
    var html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    // Toggle button
    var lb = document.getElementById('langToggle');
    if (lb) lb.textContent = lang === 'ar' ? 'Français' : 'عربي';
    // Static elements
    var el = function(id, txt) { var e = document.getElementById(id); if (e) e.textContent = txt; };
    el('logoTitle', T('logoTitle'));
    el('tabMonHajj', T('tabMonHajj'));
    el('tabApprendre', T('tabApprendre'));
    el('tabPreparer', T('tabPreparer'));
    el('tabPlus', T('tabPlus'));
    // Search
    var si = document.getElementById('globalSearch');
    if (si) si.placeholder = T('searchPlaceholder');
    // Sub-tabs (by content matching or data attributes)
    var subMap = {
      'learn-steps': 'learnSteps', 'learn-days': 'learnDays', 'learn-rituals': 'learnRituals',
      'learn-duas': 'learnDuas', 'learn-clothing': 'learnClothing', 'learn-classif': 'learnClassif',
      'learn-types': 'learnTypes', 'learn-map': 'learnMap', 'learn-omra': 'learnOmra',
      'prep-checklist': 'prepChecklist', 'prep-dates': 'prepDates',
      'prep-costs': 'prepCosts', 'prep-apps': 'prepApps', 'prep-nusuk': 'prepNusuk'
    };
    document.querySelectorAll('.stab').forEach(function(btn) {
      var sub = btn.dataset.sub;
      if (subMap[sub]) btn.textContent = T(subMap[sub]);
    });
    // Filter buttons
    var filterMap = {'all':'filterAll','documents':'filterDocs','vetements':'filterClothes','sante':'filterHealth','divers':'filterMisc'};
    document.querySelectorAll('.fbtn').forEach(function(btn) {
      var f = btn.dataset.filter;
      if (filterMap[f]) btn.textContent = T(filterMap[f]);
    });
    // Share button
    var shareBtn = document.getElementById('shareBtn');
    if (shareBtn) shareBtn.textContent = lang === 'ar' ? '📤 شارك هذا الدليل' : '📤 Partager ce guide';
    localStorage.setItem('hajj-lang', lang);
    // Update lang switch active state
    document.querySelectorAll('.lang-opt').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    // Update share button text
    var shareText = document.getElementById('shareBtnText');
    if (shareText) shareText.textContent = lang === 'ar' ? 'شارك هذا الدليل' : 'Partager ce guide';
    // Close help if open
    var helpPanel = document.getElementById('helpPanel');
    if (helpPanel && !helpPanel.classList.contains('hidden')) { helpOpen = false; helpPanel.classList.add('hidden'); }
    renderAll();
  }

  window.toggleLang = function() {
    lang = lang === 'fr' ? 'ar' : 'fr';
    applyLang();
  };

  window.setLang = function(l) {
    lang = l;
    applyLang();
    document.querySelectorAll('.lang-opt').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    startTicker();
  };

  // Help Panel
  var helpOpen = false;
  window.toggleHelp = function() {
    helpOpen = !helpOpen;
    var panel = document.getElementById('helpPanel');
    var titleEl = document.getElementById('helpTitle');
    var body = document.getElementById('helpBody');
    if (titleEl) titleEl.textContent = lang === 'ar' ? '❓ دليل الاستخدام' : '❓ Guide d\'utilisation';
    if (body) {
      var items = lang === 'ar' ? [
        {icon:'🕋', text:'<b>حجّي</b> — دليلك يوماً بيوم مع البرنامج والأدعية والتنبيهات'},
        {icon:'📖', text:'<b>تعلّم</b> — جميع المناسك والأدعية واللباس خطوة بخطوة'},
        {icon:'✅', text:'<b>استعد</b> — قائمة التحضير والتكاليف والتطبيقات والمواعيد'},
        {icon:'🔍', text:'<b>المزيد</b> — أسئلة شائعة، صحة، أخطاء، جولة افتراضية'},
        {icon:'🤲', text:'<b>زر الأدعية</b> (أسفل يسار) — ٦ أدعية أساسية بضغطة واحدة'},
        {icon:'📅', text:'<b>التقويم</b> — أضف كل البرنامج لجوجل أو تقويم الهاتف'},
        {icon:'🌙', text:'<b>الوضع الداكن</b> — اضغط على ☀️/🌙 في الأعلى'},
        {icon:'📤', text:'<b>المشاركة</b> — شارك الدليل مع أصدقائك عبر واتساب'}
      ] : [
        {icon:'🕋', text:'<b>Mon Hajj</b> — Votre guide jour par jour avec programme, duas et alertes'},
        {icon:'📖', text:'<b>Apprendre</b> — Tous les rituels, duas, tenue, pas à pas'},
        {icon:'✅', text:'<b>Préparer</b> — Checklist, coûts, apps, dates, inscription Nusuk'},
        {icon:'🔍', text:'<b>Plus</b> — FAQ, santé, erreurs, quiz, tour virtuel, Médine'},
        {icon:'🤲', text:'<b>Bouton Duas</b> (en bas à gauche) — 6 duas essentielles en 1 clic'},
        {icon:'📅', text:'<b>Calendrier</b> — Ajoutez tout le programme à Google Calendar ou .ics'},
        {icon:'🌙', text:'<b>Mode sombre</b> — Cliquez sur ☀️/🌙 en haut'},
        {icon:'📤', text:'<b>Partager</b> — Envoyez ce guide à vos proches via WhatsApp'}
      ];
      body.innerHTML = items.map(function(item) {
        return '<div class="help-item"><span class="help-icon">' + item.icon + '</span>' + item.text + '</div>';
      }).join('');
    }
    if (panel) panel.classList.toggle('hidden', !helpOpen);
    var helpBtn = document.getElementById('helpBtn');
    if (helpBtn) helpBtn.setAttribute('aria-expanded', String(helpOpen));
  };

  // Theme
  const tBtn = document.getElementById('themeToggle');
  const theme = localStorage.getItem('hajj-th') || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  tBtn.querySelector('.theme-icon').textContent = theme === 'light' ? '🌙' : '☀️';
  tBtn.onclick = () => {
    const n = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', n);
    localStorage.setItem('hajj-th', n);
    tBtn.querySelector('.theme-icon').textContent = n === 'light' ? '🌙' : '☀️';
  };

  // Tabs
  document.querySelectorAll('.tab').forEach(b => b.onclick = () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); tab = b.dataset.tab;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + tab).classList.add('active');
    if (tab === 'plus') { showPlusGrid(); }
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  // Sub-tabs
  document.querySelectorAll('.sub-tabs').forEach(container => {
    container.querySelectorAll('.stab').forEach(btn => {
      btn.onclick = () => {
        container.querySelectorAll('.stab').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        const parent = container.parentElement;
        parent.querySelectorAll('.sub-panel').forEach(p => p.classList.remove('active'));
        parent.querySelector('#sub-' + btn.dataset.sub).classList.add('active');
        container.scrollIntoView({behavior:'smooth', block:'start'});
      };
    });
  });

  // Scroll-to-top button
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, {passive: true});
  }

  // Search toggle in header
  var searchOpen = false;
  window.toggleSearch = function() {
    searchOpen = !searchOpen;
    var panel = document.getElementById('headerSearch');
    if (panel) {
      panel.classList.toggle('hidden', !searchOpen);
      if (searchOpen) document.getElementById('globalSearch').focus();
    }
  };

  // Emergency Duas Panel
  var duaPanelOpen = false;
  var ESSENTIAL_DUAS = [
    {label:'التلبية — Talbiyah', ar:'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ', fr:'Me voici ô Allah, me voici ! Pas d\'associé. La louange, la grâce et le pouvoir sont à Toi.'},
    {label:'دعاء عرفة — Arafat', ar:'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ', fr:'Il n\'y a de dieu qu\'Allah, Seul, sans associé. Le pouvoir et la louange Lui appartiennent.'},
    {label:'بين الركنين — Tawaf', ar:'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', fr:'Seigneur, accorde-nous un bien ici-bas et dans l\'au-delà, et protège-nous du Feu.'},
    {label:'تكبيرات التشريق — Tashriq', ar:'اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَٰهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ', fr:'Allah est Grand ×2, pas de dieu sauf Allah, Allah est Grand ×2, à Lui la louange.'},
    {label:'عند الرمي — Lapidation', ar:'اللَّهُ أَكْبَرُ', fr:'Allah est le Plus Grand — à chaque caillou.'},
    {label:'الاستغفار — Pardon', ar:'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي', fr:'Ô Allah, Tu es le Pardonneur, Tu aimes le pardon, alors pardonne-moi.'}
  ];

  window.toggleDuaPanel = function() {
    duaPanelOpen = !duaPanelOpen;
    var panel = document.getElementById('duaPanel');
    var titleEl = document.getElementById('duaPanelTitle');
    if (titleEl) titleEl.textContent = lang === 'ar' ? '🤲 الأدعية الأساسية' : '🤲 Duas Essentielles';
    var body = document.getElementById('duaPanelContent');
    if (body && !body.innerHTML) {
      body.innerHTML = ESSENTIAL_DUAS.map(function(d) {
        return '<div class="dua-item"><div class="dua-item-label">' + d.label + '</div><div class="dua-item-ar">' + d.ar + '</div><div class="dua-item-fr">' + (lang === 'ar' ? '' : d.fr) + '</div></div>';
      }).join('');
    }
    if (panel) panel.classList.toggle('hidden', !duaPanelOpen);
    var duaBtn = document.getElementById('duaBtn');
    if (duaBtn) duaBtn.setAttribute('aria-expanded', String(duaPanelOpen));
  };

  // Search
  let st; document.getElementById('globalSearch').oninput = e => {
    clearTimeout(st); st = setTimeout(() => {
      const q = e.target.value.toLowerCase().trim();
      if (q.length < 2) { renderAll(); return; }
      document.querySelectorAll('.step-card,.tl-day,.rit-card,.ck-item,.dua,.fq,.h-card').forEach(el => {
        el.style.display = el.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    }, 300);
  };

  function renderAll() {
    fcs = [...(D('flashcards'))]; fcIdx = 0;
    renderSBS(); renderTL(); renderRit(); renderCK(); renderCL(); renderDua(); renderFC(); renderHP(); renderFQ(); renderClassif(); renderMap(); renderNusuk(); renderLinks(); renderTour(); renderHandicap(); renderPractical(); renderHeat(); renderErrors(); renderTypes(); renderMedina(); renderApps(); renderCosts(); renderDates(); renderCompanion(); renderOmra(); showPlusGrid();
  }

  // ============ PLUS GRID (replaces old Explorer) ============
  const PLUS_SECTIONS_FR = [
    { group: "❓ Questions & Réponses", items: [
      { id: "faq", icon: "❓", title: "FAQ", desc: "22 questions fréquentes" },
      { id: "errors", icon: "❌", title: "Top 10 Erreurs", desc: "Les pièges à éviter" },
      { id: "practical", icon: "🤔", title: "Questions Pratiques", desc: "Situations délicates" },
      { id: "flashcards", icon: "🃏", title: "Quiz", desc: "Testez vos connaissances" },
    ]},
    { group: "🛡️ Santé & Sécurité", items: [
      { id: "health", icon: "❤️", title: "Santé", desc: "16 conseils essentiels" },
      { id: "heat", icon: "🌡️", title: "Survie Chaleur", desc: "Protocole anti-canicule" },
      { id: "handicap", icon: "♿", title: "Accessibilité", desc: "PMR, seniors, enceintes" },
    ]},
    { group: "🕌 Découvrir", items: [
      { id: "tour", icon: "🏛️", title: "Tour Virtuel", desc: "Les lieux saints" },
      { id: "medina", icon: "🕌", title: "Guide Médine", desc: "Rawdah, Quba, Uhud" },
      { id: "links", icon: "🔗", title: "Liens Utiles", desc: "Sites officiels" },
    ]},
    { group: "ℹ️ À propos", items: [
      { id: "about", icon: "ℹ️", title: "À propos", desc: "Sources, contact, GitHub" },
    ]}
  ];
  const PLUS_SECTIONS_AR = [
    { group: "❓ أسئلة وأجوبة", items: [
      { id: "faq", icon: "❓", title: "أسئلة شائعة", desc: "٢٢ سؤالاً متكرراً" },
      { id: "errors", icon: "❌", title: "أخطاء شائعة", desc: "أخطاء يجب تجنبها" },
      { id: "practical", icon: "🤔", title: "مسائل عملية", desc: "حالات دقيقة" },
      { id: "flashcards", icon: "🃏", title: "اختبار", desc: "اختبر معلوماتك" },
    ]},
    { group: "🛡️ الصحة والسلامة", items: [
      { id: "health", icon: "❤️", title: "الصحة", desc: "١٦ نصيحة أساسية" },
      { id: "heat", icon: "🌡️", title: "مواجهة الحر", desc: "بروتوكول ضد الحرارة" },
      { id: "handicap", icon: "♿", title: "ذوي الاحتياجات", desc: "كبار السن، الحوامل" },
    ]},
    { group: "🕌 اكتشف", items: [
      { id: "tour", icon: "🏛️", title: "جولة افتراضية", desc: "الأماكن المقدسة" },
      { id: "medina", icon: "🕌", title: "دليل المدينة", desc: "الروضة، قباء، أحد" },
      { id: "links", icon: "🔗", title: "روابط مفيدة", desc: "المواقع الرسمية" },
    ]},
    { group: "ℹ️ حول التطبيق", items: [
      { id: "about", icon: "ℹ️", title: "حول التطبيق", desc: "المصادر، التواصل، GitHub" },
    ]}
  ];
  const PLUS_SECTIONS_EN = [
    { group: "❓ Questions & Answers", items: [
      { id: "faq", icon: "❓", title: "FAQ", desc: "22 common questions" },
      { id: "errors", icon: "❌", title: "Top 10 Mistakes", desc: "Pitfalls to avoid" },
      { id: "practical", icon: "🤔", title: "Practical Questions", desc: "Tricky situations" },
      { id: "flashcards", icon: "🃏", title: "Quiz", desc: "Test your knowledge" },
    ]},
    { group: "🛡️ Health & Safety", items: [
      { id: "health", icon: "❤️", title: "Health", desc: "16 essential tips" },
      { id: "heat", icon: "🌡️", title: "Heat Survival", desc: "Anti-heatwave protocol" },
      { id: "handicap", icon: "♿", title: "Accessibility", desc: "Elderly, pregnant, disabled" },
    ]},
    { group: "🕌 Discover", items: [
      { id: "tour", icon: "🏛️", title: "Virtual Tour", desc: "The holy sites" },
      { id: "medina", icon: "🕌", title: "Medina Guide", desc: "Rawdah, Quba, Uhud" },
      { id: "links", icon: "🔗", title: "Useful Links", desc: "Official websites" },
    ]},
    { group: "ℹ️ About", items: [
      { id: "about", icon: "ℹ️", title: "About", desc: "Sources, contact, GitHub" },
    ]}
  ];
  function getPlusSections() { return lang === 'ar' ? PLUS_SECTIONS_AR : lang === 'en' ? PLUS_SECTIONS_EN : PLUS_SECTIONS_FR; }

  function showPlusGrid() {
    const grid = document.getElementById('plusGrid');
    const content = document.getElementById('plusContent');
    if (!grid || !content) return;
    content.style.display = 'none'; content.innerHTML = '';
    grid.style.display = 'block';
    grid.innerHTML = getPlusSections().map(group => `
      <div class="explore-group-title">${group.group}</div>
      <div class="explore-grid">${group.items.map(item => `
        <div class="explore-card" onclick="openPlusSection('${item.id}')">
          <span class="ec-icon">${item.icon}</span>
          <div class="ec-title">${item.title}</div>
          <div class="ec-desc">${item.desc}</div>
        </div>`).join('')}</div>
    `).join('');
  }
  window.showPlusGrid = showPlusGrid;

  // Hidden containers for Plus sections
  function ensureHiddenContainers() {
    ['faqContainer','errorsContainer','practicalContainer','healthContainer','heatContainer','handicapContainer','linksContainer','flashcardArea','tourContainer','medinaContainer'].forEach(id => {
      if (!document.getElementById(id)) {
        const d = document.createElement('div'); d.id = id; d.style.display = 'none';
        document.body.appendChild(d);
      }
    });
  }
  ensureHiddenContainers();

  window.openPlusSection = function(id) {
    const grid = document.getElementById('plusGrid');
    const content = document.getElementById('plusContent');
    grid.style.display = 'none';
    content.style.display = 'block';
    document.getElementById('panel-plus').scrollIntoView({behavior:'smooth',block:'start'});

    const sourceMap = {
      faq: 'faqContainer', errors: 'errorsContainer', practical: 'practicalContainer',
      health: 'healthContainer', heat: 'heatContainer', handicap: 'handicapContainer',
      tour: 'tourContainer', medina: 'medinaContainer', links: 'linksContainer'
    };

    if (id === 'about') {
      content.innerHTML = `<button class="explore-back" onclick="showPlusGrid()">${T('backBtn')}</button>` + renderAbout();
      return;
    }

    if (id === 'flashcards') {
      const f = fcs[fcIdx];
      content.innerHTML = `<button class="explore-back" onclick="showPlusGrid()">${T('backBtn')}</button>
        <div style="text-align:center;margin-bottom:16px"><button class="fc-b" onclick="xfcP()">⬅️</button> <span id="xfcC">${fcIdx+1}/${fcs.length}</span> <button class="fc-b" onclick="xfcN()">➡️</button></div>
        <div class="fc-area"><div class="fc" onclick="this.classList.toggle('flip')">
          <div class="fc-face fc-front"><div class="fc-lbl">${lang==='ar'?'السؤال':'Question'}</div><div class="fc-q">${f.q}</div></div>
          <div class="fc-face fc-back"><div class="fc-lbl">${lang==='ar'?'الإجابة':lang==='en'?'Answer':'Réponse'}</div><div class="fc-a">${f.a}</div></div>
        </div></div>
        <div style="text-align:center;margin-top:16px"><button class="fc-b" onclick="xfcS()">🔀 ${lang==='ar'?'خلط':lang==='en'?'Shuffle':'Mélanger'}</button></div>`;
      return;
    }

    const src = sourceMap[id];
    if (src && document.getElementById(src)) {
      content.innerHTML = `<button class="explore-back" onclick="showPlusGrid()">${T('backBtn')}</button>` + document.getElementById(src).innerHTML;
      content.querySelectorAll('.fq-q').forEach(q => {
        q.onclick = () => q.parentElement.classList.toggle('open');
      });
    }
  };

  function renderAbout() {
    const isAr = lang === 'ar';
    const isEn = lang === 'en';

    const disclaimer = isAr
      ? `<div class="about-disclaimer">
          <div class="about-disclaimer-title">⚠️ تنبيه مهم</div>
          <p>أنا لست عالماً ولا شيخاً. هذا الدليل هو جهد شخصي متواضع — لم أجد على الإنترنت ما يناسب احتياجاتي، فقررت إنشاءه بنفسي. قد يحتوي على أخطاء. تحقق دائماً من المعلومات مع إمام أو مصدر إسلامي موثوق.</p>
        </div>`
      : isEn
      ? `<div class="about-disclaimer">
          <div class="about-disclaimer-title">⚠️ Important Disclaimer</div>
          <p>I am not a scholar or a sheikh. This guide is a personal effort — I couldn't find online what I needed, so I built it myself. It may contain errors. Always verify information with a trusted imam or Islamic authority.</p>
        </div>`
      : `<div class="about-disclaimer">
          <div class="about-disclaimer-title">⚠️ Avertissement important</div>
          <p>Je ne suis ni savant ni cheikh. Ce guide est un effort personnel — je n'ai pas trouvé en ligne ce qui me convenait, alors je l'ai construit moi-même. Il peut contenir des erreurs. Vérifiez toujours auprès d'un imam ou d'une source islamique de confiance.</p>
        </div>`;

    const refsTitle = isAr ? '📚 المصادر والمراجع' : isEn ? '📚 Sources & References' : '📚 Sources & Références';
    const refs = [
      { name: 'Ministère du Hajj et de l\'Omra (KSA)', url: 'https://www.haj.gov.sa', desc: isAr ? 'المصدر الرسمي' : isEn ? 'Official Saudi source' : 'Source officielle saoudienne' },
      { name: 'Islam Q&A — islamqa.info', url: 'https://islamqa.info', desc: isAr ? 'فتاوى الحج والعمرة' : isEn ? 'Hajj & Umrah fatwas' : 'Fatwas Hajj & Omra' },
      { name: 'Islamweb — islamweb.net', url: 'https://www.islamweb.net', desc: isAr ? 'فتاوى وأحكام' : isEn ? 'Fatwas and rulings' : 'Fatwas et règles' },
      { name: 'Nusuk — nusuk.sa', url: 'https://www.nusuk.sa', desc: isAr ? 'منصة الحج الرسمية' : isEn ? 'Official Hajj platform' : 'Plateforme Hajj officielle' },
      { name: 'Wikipedia — Hajj', url: 'https://fr.wikipedia.org/wiki/Hajj', desc: isAr ? 'الهيكل العام' : isEn ? 'General structure' : 'Structure générale' },
    ];

    const contactTitle = isAr ? '📬 تواصل معنا' : isEn ? '📬 Contact' : '📬 Contact';
    const contactDesc = isAr
      ? 'للإبلاغ عن خطأ أو اقتراح تحسين، راسلنا على:'
      : isEn
      ? 'To report an error or suggest an improvement, contact us at:'
      : 'Pour signaler une erreur ou suggérer une amélioration, contactez-nous :';

    const githubTitle = isAr ? '🤝 المساهمة في المشروع' : isEn ? '🤝 Contribute' : '🤝 Contribuer';
    const githubDesc = isAr
      ? 'هذا المشروع مفتوح المصدر. نرحب بكل مساهمة — إصلاح خطأ، ترجمة، محتوى جديد.'
      : isEn
      ? 'This project is open source. All contributions are welcome — bug fixes, translations, new content.'
      : 'Ce projet est open source. Toutes les contributions sont bienvenues — corrections, traductions, nouveau contenu.';

    const aiTitle = isAr ? '🤖 إعادة البناء بالذكاء الاصطناعي' : isEn ? '🤖 Rebuild with AI' : '🤖 Reconstruire avec l\'IA';
    const aiDesc = isAr
      ? 'تريد إنشاء نسختك الخاصة؟ إليك الموجّه والخطة المستخدمة:'
      : isEn
      ? 'Want to build your own version? Here is the prompt and plan used:'
      : 'Vous voulez créer votre propre version ? Voici le prompt et le plan utilisés :';

    const aiPrompt = `Build a complete, bilingual (French/Arabic/English) Hajj 2026 guide as a single-page web app.
Tech: vanilla HTML + CSS + JS, zero dependencies, zero build tools, mobile-first.
Features: step-by-step companion guide (5 days), rituals, duas, checklist, costs, timeline, map, types of Hajj, clothing guide, FAQ, health tips, flashcard quiz, Medina guide, Umrah guide, dates/calendar with .ics export, Nusuk registration guide, PWA manifest, dark/light theme, RTL/LTR, localStorage persistence, Web Audio API sounds, splash screen, toast notifications, Hijri date in footer, shake-to-report, breathing animation, typewriter effect.
Data: all content in data.js as JS objects with French (default), Arabic (*Ar suffix), English (*En suffix) keys.
Style: gold (#c9a84c) + teal (#4a9f8a) palette on dark (#1a1612) background, Amiri/Noto Naskh Arabic fonts, pill tabs, card grid for Plus sections, animated splash with verse and countdown.
Structure: 4 main tabs (Mon Hajj, Apprendre, Préparer, Plus) with sub-tabs. Companion guide renders day-by-day content from data.js. Plus tab uses card grid → detail panel pattern.`;

    const aiPlan = `1. index.html — shell, 4 tabs, sub-tabs, splash, toast, manifest link
2. style.css — CSS variables, dark theme default, tabs, cards, animations
3. data.js — all content: steps, rituals, duas, checklist, FAQ, health, map, etc.
4. app.js — render functions for each section, language switch (T/D helpers), localStorage, sounds, splash, PWA
5. manifest.json — PWA metadata
github.com/abourdim/hajj-guide`;

    return `
      <div class="about-wrap">
        ${disclaimer}

        <div class="about-section">
          <div class="about-section-title">${refsTitle}</div>
          ${refs.map(r => `<div class="about-ref-item">
            <a href="${r.url}" target="_blank" rel="noopener" class="about-ref-link">${r.name}</a>
            <span class="about-ref-desc">${r.desc}</span>
          </div>`).join('')}
        </div>

        <div class="about-section">
          <div class="about-section-title">${contactTitle}</div>
          <p class="about-text">${contactDesc}</p>
          <a href="mailto:abdelhak.bourdim@gmail.com" class="about-contact-link">✉️ abdelhak.bourdim@gmail.com</a>
        </div>

        <div class="about-section">
          <div class="about-section-title">${githubTitle}</div>
          <p class="about-text">${githubDesc}</p>
          <a href="https://github.com/abourdim/hajj-guide" target="_blank" rel="noopener" class="about-github-link">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" style="vertical-align:middle;margin-right:6px"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            github.com/abourdim/hajj-guide
          </a>
        </div>

        <div class="about-section">
          <div class="about-section-title">${aiTitle}</div>
          <p class="about-text">${aiDesc}</p>
          <details class="about-ai-details">
            <summary class="about-ai-summary">${isAr ? 'الموجّه (Prompt)' : isEn ? 'The Prompt' : 'Le Prompt'}</summary>
            <pre class="about-ai-pre">${aiPrompt}</pre>
          </details>
          <details class="about-ai-details">
            <summary class="about-ai-summary">${isAr ? 'خطة التنفيذ' : isEn ? 'Implementation Plan' : 'Plan d\'implémentation'}</summary>
            <pre class="about-ai-pre">${aiPlan}</pre>
          </details>
        </div>
      </div>`;
  }

  window.xfcP = () => { fcIdx=(fcIdx-1+fcs.length)%fcs.length; openPlusSection('flashcards'); };
  window.xfcN = () => { fcIdx=(fcIdx+1)%fcs.length; openPlusSection('flashcards'); };
  window.xfcS = () => { for(let i=fcs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[fcs[i],fcs[j]]=[fcs[j],fcs[i]]} fcIdx=0; openPlusSection('flashcards'); };

  function ritSvg(emoji, t1, t2, t3) {
    return `<svg viewBox="0 0 400 110" class="rit-svg"><defs><linearGradient id="rg${emoji.codePointAt(0)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="var(--teal)" stop-opacity=".08"/><stop offset="100%" stop-color="var(--gold)" stop-opacity=".04"/></linearGradient></defs><rect width="400" height="110" fill="url(#rg${emoji.codePointAt(0)})"/><text x="58" y="64" font-size="38" text-anchor="middle" opacity=".8">${emoji}</text><text x="130" y="35" font-size="13" fill="var(--t1)" font-weight="700" font-family="sans-serif">${t1}</text><text x="130" y="58" font-size="10.5" fill="var(--t2)" font-family="sans-serif">${t2}</text><text x="130" y="78" font-size="10" fill="var(--t3)" font-family="sans-serif">${t3}</text><rect x="130" y="90" width="60" height="2.5" rx="1" fill="var(--gold)" opacity=".4"/></svg>`;
  }
  function getRitSvg() {
    if (lang === 'en') return {
      "🤍": ritSvg("🤍","Ihram — Sacred State","Equality before Allah • 2 white cloths (♂)","No perfume • No stitched clothing (♂)"),
      "🔄": ritSvg("🕋","Tawaf — 7 Circuits","Counter-clockwise • Black Stone → Black Stone","Wudu required • Free duas during circuits"),
      "🏃": ritSvg("🏃","Sa'i — Safa ↔ Marwa","7 laps • ~3.15 km total","In memory of Hajar seeking water"),
      "⛰️": ritSvg("⛰️","Arafat — ⭐ ABSOLUTE PILLAR","Noon to Maghrib • 9 Dhul Hijjah","'Hajj IS Arafat'"),
      "🪨": ritSvg("🪨","Stoning of Jamarat","7 pebbles × each • 'Allahu Akbar'","Ibrahim rejecting the devil 3 times"),
      "🐑": ritSvg("🐑","The Sacrifice (Hady)","Sheep, goat or 1/7 cow/camel","⅓ you • ⅓ family • ⅓ poor"),
      "✂️": ritSvg("✂️","Shaving (Halq) / Trim (Taqsir)","♂ Shaving preferred (3× duas)","♀ Trim 1-2 cm only"),
      "🗣️": ritSvg("🗣️","The Talbiyah","Labbayk Allahumma Labbayk!","From Ihram → 1st pebble on day 10"),
      "💧": ritSvg("💧","Zamzam Water","Miraculous spring • 4,000+ years","'It is for whatever it is drunk for'"),
      "👋": ritSvg("👋","Farewell Tawaf (al-Wada')","7 final circuits • Obligatory (Wajib)","Last act before leaving Makkah")
    };
    if (lang === 'ar') return {
      "🤍": ritSvg("🤍","الإحرام — الحالة المقدسة","المساواة أمام الله • إزار ورداء (♂)","بدون عطر • بدون مخيط (♂)"),
      "🔄": ritSvg("🕋","الطواف — ٧ أشواط","عكس عقارب الساعة • الحجر الأسود","الوضوء واجب • الدعاء حر"),
      "🏃": ritSvg("🏃","السعي — الصفا ↔ المروة","٧ أشواط • ~٣.١٥ كم","تخليداً لذكرى هاجر"),
      "⛰️": ritSvg("⛰️","عرفة — ⭐ الركن الأعظم","من الظهر إلى المغرب • ٩ ذو الحجة","«الحج عرفة»"),
      "🪨": ritSvg("🪨","رمي الجمرات","٧ حصيات × كل جمرة • «الله أكبر»","إبراهيم يرفض الشيطان ٣ مرات"),
      "🐑": ritSvg("🐑","الذبح (الهدي)","شاة أو ١/٧ بقرة/جمل","⅓ لكم • ⅓ للأقارب • ⅓ للفقراء"),
      "✂️": ritSvg("✂️","الحلق / التقصير","♂ الحلق أفضل (٣× دعوات)","♀ قص ١-٢ سم فقط"),
      "🗣️": ritSvg("🗣️","التلبية","لبيك اللهم لبيك!","من الإحرام ← أول حصاة يوم ١٠"),
      "💧": ritSvg("💧","ماء زمزم","نبع معجزة • +٤٠٠٠ سنة","«ماء زمزم لما شُرب له»"),
      "👋": ritSvg("👋","طواف الوداع","٧ أشواط أخيرة • واجب","آخر عمل قبل مغادرة مكة")
    };
    return {
      "🤍": ritSvg("🤍","L'Ihram — État Sacré","Égalité devant Allah • 2 draps blancs (♂)","Pas de parfum • Pas de couture (♂)"),
      "🔄": ritSvg("🕋","Le Tawaf — 7 Tours","Sens antihoraire • Pierre Noire → Pierre Noire","Wudu requis • Duas libres pendant les tours"),
      "🏃": ritSvg("🏃","Le Sa'i — Safa ↔ Marwa","7 allers-retours • ~3,15 km total","En mémoire de Hajar cherchant l'eau"),
      "⛰️": ritSvg("⛰️","Arafat — ⭐ PILIER ABSOLU","Du midi au Maghrib • 9 Dhul Hijjah","« Le Hajj, c'est Arafat »"),
      "🪨": ritSvg("🪨","Lapidation des Jamarat","7 cailloux × chaque • « Allahu Akbar »","Ibrahim rejetant le diable 3 fois"),
      "🐑": ritSvg("🐑","Le Sacrifice (Hady)","Mouton, chèvre ou 1/7 vache/chameau","⅓ vous • ⅓ proches • ⅓ pauvres"),
      "✂️": ritSvg("✂️","Rasage (Halq) / Coupe (Taqsir)","♂ Rasage préférable (3× invocations)","♀ Coupe de 1-2 cm uniquement"),
      "🗣️": ritSvg("🗣️","La Talbiyah","Labbayk Allahumma Labbayk !","De l'Ihram → 1er caillou du 10ème jour"),
      "💧": ritSvg("💧","Eau de Zamzam","Source miraculeuse • 4 000+ ans","« Pour ce pour quoi elle est bue »"),
      "👋": ritSvg("👋","Tawaf d'Adieu (al-Wada')","7 derniers tours • Obligatoire (Wajib)","Dernier acte avant de quitter La Mecque")
    };
  }

  // ============ STEP BY STEP ============
  function renderSBS() {
    const c = document.getElementById('stepsContainer');
    const sbsData = D('stepByStep'); if (!sbsData) return;
    let si = 0, doneCount = Object.keys(done).length;

    let h = `<div class="sbs-prog"><div class="sbs-pbar"><div class="sbs-pfill" style="width:${doneCount/22*100}%"></div></div><span class="sbs-ptxt">${doneCount}/22 ${T('progressSteps')}</span></div>`;

    h += sbsData.map(phase => {
      let ph = `<div class="sbs-phase"><div class="sbs-ph" style="border-left-color:${phase.color}"><span>${phase.icon}</span> ${phase.phase}</div><div class="sbs-list">`;
      ph += phase.steps.map(step => {
        si++;
        const d2 = done['s'+si], cls = d2 ? 'done' : '';
        return `<div class="step-card ${cls}" data-si="${si}">
          <div class="step-head" onclick="this.parentElement.classList.toggle('open')">
            <div class="step-num" style="background:${d2?'var(--grn)':phase.color}">${d2?'⭐':step.num}</div>
            <span class="step-em">${step.emoji}</span>
            <h4 class="step-ttl">${step.title}${d2?' ✓':''}</h4>
            <span class="step-chev">▼</span>
          </div>
          <div class="step-body"><div class="step-inner">

            <div class="step-desc">${step.what}</div>
            <div class="how-grid">${step.how.map((x,i)=>{
              const parts = x.split(':');
              const hasLabel = parts.length > 1 && parts[0].length < 50;
              return `<div class="how-card"><div class="how-num">${i+1}</div><div class="how-txt">${hasLabel ? '<b>'+parts[0]+'</b>: '+parts.slice(1).join(':') : x}</div></div>`;
            }).join('')}</div>
            ${step.tips ? `<div class="tip-box"><b>${T('tipLabel')} :</b> ${step.tips}</div>` : ''}
            ${step.erreurs && step.erreurs.length ? `<div class="err-box"><b>⚠️ ${T('errorsLabel')} :</b><ul>${step.erreurs.map(e=>`<li>${e}</li>`).join('')}</ul></div>` : ''}
          </div></div>
        </div>`;
      }).join('');
      return ph + '</div></div>';
    }).join('');

    c.innerHTML = h;

    // Double-click to complete
    c.querySelectorAll('.step-card').forEach(el => {
      el.querySelector('.step-head').addEventListener('dblclick', e => {
        e.stopPropagation();
        const key = 's' + el.dataset.si;
        done[key] = !done[key]; if (!done[key]) delete done[key];
        localStorage.setItem('hajj-done', JSON.stringify(done));
        renderSBS();
      });
    });
  }

  // ============ TIMELINE ============
  function renderTL() {
    const c = document.getElementById('timelineContainer'); if (!c) return;
    const tlData = D('timeline'); if (!tlData) return;
    c.innerHTML = `<div class="tl-wrap">${tlData.map((d,i) => `
      <div class="tl-day">
        <div class="tl-dot">${i+1}</div>
        <div class="tl-card" onclick="this.classList.toggle('expanded')">
          <div class="tl-top"><span class="tl-em">${d.emoji}</span><div><div class="tl-name">${d.title}</div><div class="tl-sub">${d.day}</div></div></div>
          <div class="tl-sum">${d.summary}</div>
          <div class="tl-hint">👆 ${lang==='ar'?'اضغط للتفاصيل':lang==='en'?'Click for details':'Cliquez pour les détails'}</div>
          <div class="tl-details">
            ${d.hikmah ? `<div class="hk-box"><b>🌟 ${lang==='ar'?'حكمة':lang==='en'?'Wisdom (Hikmah)':'Sagesse (Hikmah)'}</b><p>${d.hikmah}</p></div>` : ''}
            ${d.steps.map(s => `<div class="tl-step"><b>${s.title}</b><p>${s.desc}</p></div>`).join('')}
            ${d.erreurs && d.erreurs.length ? `<div class="er-box"><b>⚠️ ${T('errorsLabel')}</b><ul>${d.erreurs.map(e=>`<li>${e}</li>`).join('')}</ul></div>` : ''}
          </div>
        </div>
      </div>
    `).join('')}</div>`;
  }

  // ============ RITUALS ============
  function renderRit() {
    const c = document.getElementById('ritualsContainer'); if (!c) return;
    const ritData = D('rituals'); if (!ritData) return;
    c.innerHTML = ritData.map(r => `
      <div class="rit-card">
        ${getRitSvg()[r.emoji] ? `<div class="rit-illus">${getRitSvg()[r.emoji]}</div>` : `<span class="rit-em">${r.emoji}</span>`}
        <h3 class="rit-name">${r.name}</h3>
        <p class="rit-desc">${r.desc}</p>
        <div class="rit-tip"><b>${T('bestPractice')} :</b> ${r.bestPractice}</div>
        ${r.history ? `<div class="rit-hist"><b>${T('history')} :</b> ${r.history}</div>` : ''}
        ${r.interdits ? `<div class="rit-rules"><b>${T('rules')} :</b> ${r.interdits}</div>` : ''}
      </div>
    `).join('');
  }

  // ============ CHECKLIST ============
  function renderCK() {
    const c = document.getElementById('checklistContainer'); if (!c) return;
    const f = document.querySelector('.fbtn.active')?.dataset.filter || 'all';
    const ckData = D('checklist'); if (!ckData) return;
    const items = ckData.filter(x => f === 'all' || x.cat === f);
    const cats = { documents:'📄', vetements:'👘', sante:'💊', divers:'🎒' };
    c.innerHTML = items.map((x,i) => {
      const label = x.label || x.item;
      const key = 'c'+i+(x.label||x.item||'').substring(0,8), ch = checked[key];
      return `<div class="ck-item ${ch?'chk':''}" data-k="${key}" onclick="ckToggle(this)">
        <div class="ck-box">${ch?'✓':''}</div><span class="ck-lbl">${label}</span><span class="ck-tag">${cats[x.cat]||''}</span>
      </div>`;
    }).join('');
    updProg();
  }
  window.ckToggle = el => {
    const k = el.dataset.k; checked[k] = !checked[k];
    localStorage.setItem('hajj-ck', JSON.stringify(checked));
    el.classList.toggle('chk'); el.querySelector('.ck-box').textContent = checked[k] ? '✓' : '';
    updProg();
  };
  function updProg() {
    const t = HAJJ_DATA.checklist.length, d2 = Object.values(checked).filter(Boolean).length;
    const pf = document.getElementById('progressFill');
    const pt = document.getElementById('progressText');
    if (pf) pf.style.width = (d2/t*100)+'%';
    if (pt) pt.textContent = d2+'/'+t;
  }
  document.querySelectorAll('.fbtn').forEach(b => b.onclick = () => {
    document.querySelectorAll('.fbtn').forEach(x => x.classList.remove('active'));
    b.classList.add('active'); renderCK();
  });

  // ============ CLOTHING with SVG ============
  function renderCL() {
    if (!document.getElementById('clothingContainer')) return;
    var cl = lang==='ar' ? {m:'رجل',f:'امرأة',title:'👘 الإحرام — لباس الحج',mDesc:'إزار (أسفل) + رداء (أعلى)',mNo:'❌ بدون مخيط • بدون سروال',mOk:'✅ صندل • حزام • ساعة',fDesc:'ملابس محتشمة عادية',fNo:'❌ بدون نقاب • بدون قفازات',fOk:'✅ حجاب • ملابس داخلية ✓'}
      : lang==='en' ? {m:'MAN',f:'WOMAN',title:'👘 IHRAM — Hajj Clothing',mDesc:'IZAR (lower) + RIDA (upper)',mNo:'❌ No stitched clothes • No underwear',mOk:'✅ Sandals • Belt • Watch',fDesc:'Regular modest clothing',fNo:'❌ No niqab • No gloves',fOk:'✅ Hijab • Underwear OK'}
      : {m:'HOMME',f:'FEMME',title:'👘 IHRAM — Tenue du Hajj',mDesc:'IZAR (bas) + RIDA (haut)',mNo:'❌ Pas de cousu • Pas de slip',mOk:'✅ Sandales • Ceinture • Montre',fDesc:'Vêtements modestes habituels',fNo:'❌ Pas de niqab • Pas de gants',fOk:'✅ Hijab • Sous-vêtements OK'};
    const ihramSvg = `<svg viewBox="0 0 600 180" style="width:100%;height:auto">
      <rect width="600" height="180" rx="12" fill="var(--acc)" opacity=".4"/>
      <circle cx="150" cy="50" r="22" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/><text x="150" y="56" text-anchor="middle" font-size="22">👨</text>
      <text x="150" y="90" text-anchor="middle" font-size="10" fill="var(--t1)" font-weight="700">${cl.m}</text>
      <rect x="80" y="100" width="140" height="28" rx="6" fill="var(--card)" stroke="var(--teal)" stroke-width="1.5"/>
      <text x="150" y="118" text-anchor="middle" font-size="8" fill="var(--teal)" font-weight="600">${cl.mDesc}</text>
      <rect x="80" y="134" width="140" height="18" rx="4" fill="rgba(196,90,107,.08)" stroke="var(--rose)" stroke-width="1"/>
      <text x="150" y="147" text-anchor="middle" font-size="7" fill="var(--rose)">${cl.mNo}</text>
      <rect x="80" y="156" width="140" height="18" rx="4" fill="rgba(46,125,82,.08)" stroke="var(--grn)" stroke-width="1"/>
      <text x="150" y="169" text-anchor="middle" font-size="7" fill="var(--grn)">${cl.mOk}</text>
      <circle cx="450" cy="50" r="22" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/><text x="450" y="56" text-anchor="middle" font-size="22">👩</text>
      <text x="450" y="90" text-anchor="middle" font-size="10" fill="var(--t1)" font-weight="700">${cl.f}</text>
      <rect x="380" y="100" width="140" height="28" rx="6" fill="var(--card)" stroke="var(--teal)" stroke-width="1.5"/>
      <text x="450" y="118" text-anchor="middle" font-size="8" fill="var(--teal)" font-weight="600">${cl.fDesc}</text>
      <rect x="380" y="134" width="140" height="18" rx="4" fill="rgba(196,90,107,.08)" stroke="var(--rose)" stroke-width="1"/>
      <text x="450" y="147" text-anchor="middle" font-size="7" fill="var(--rose)">${cl.fNo}</text>
      <rect x="380" y="156" width="140" height="18" rx="4" fill="rgba(46,125,82,.08)" stroke="var(--grn)" stroke-width="1"/>
      <text x="450" y="169" text-anchor="middle" font-size="7" fill="var(--grn)">${cl.fOk}</text>
      <line x1="300" y1="40" x2="300" y2="170" stroke="var(--brd)" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="300" y="30" text-anchor="middle" font-size="9" fill="var(--gold)" font-weight="700">${cl.title}</text>
    </svg>`;
    (document.getElementById('clothingContainer')||{}).innerHTML= `
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh);margin-bottom:16px;overflow:hidden">${ihramSvg}</div>
      ${(D('clothing')).map(c => `
        <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:12px">
          <h3 style="font-family:var(--fd);font-size:1.1rem;color:var(--grn);margin-bottom:10px">${c.title}</h3>
          <p style="font-size:.88rem;color:var(--t2);line-height:1.65;margin-bottom:12px">${c.content}</p>
          ${c.items ? `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:6px">
            ${c.items.map(item => {
              const isNo = item.includes('❌') || item.includes('INTERDIT') || item.includes('PROHIBITED') || item.includes('HOMMES :') || item.includes('FEMMES :') || item.includes('MEN:') || item.includes('WOMEN:');
              const isYes = item.includes('✅') || item.includes('AUTORIS') || item.includes('ALLOWED');
              const bg = isNo ? 'rgba(196,90,107,.06)' : isYes ? 'rgba(46,125,82,.06)' : 'var(--acc)';
              const brd2 = isNo ? 'var(--rose)' : isYes ? 'var(--grn)' : 'var(--gold)';
              return '<div style="display:flex;gap:8px;align-items:flex-start;padding:8px 12px;background:'+bg+';border-radius:'+('var(--r)')+';border-left:3px solid '+brd2+';font-size:.82rem;line-height:1.5;color:var(--t1)">'+item+'</div>';
            }).join('')}
          </div>` : ''}
        </div>
      `).join('')}
    `;
  }

  // ============ DUAS ============
  const DUA_OCCASIONS_AR = {
    "La Talbiyah — dès l'Ihram jusqu'au 1er lancer du 10": "التلبية — من الإحرام إلى أول رمية يوم العاشر",
    "En voyant la Kaaba": "عند رؤية الكعبة",
    "Au début du Tawaf — Pierre Noire": "بداية الطواف — الحجر الأسود",
    "Tawaf — entre le Coin Yéménite et la Pierre Noire": "بين الركن اليماني والحجر الأسود",
    "Tawaf — invocation libre": "الطواف — دعاء حر",
    "Après le Tawaf — Maqam Ibrahim": "بعد الطواف — مقام إبراهيم",
    "Boire Zamzam": "شرب زمزم",
    "Au sommet du Safa": "على الصفا",
    "Durant le Sa'i — entre Safa et Marwa": "أثناء السعي",
    "Jour d'Arafat — la MEILLEURE invocation": "يوم عرفة — أفضل الدعاء ⭐",
    "Arafat — demande de pardon": "عرفة — طلب المغفرة",
    "À Muzdalifah": "في المزدلفة",
    "En lançant les cailloux (Jamarat)": "عند رمي الجمرات",
    "Le sacrifice": "عند الذبح",
    "Takbir at-Tashriq — après chaque prière": "تكبيرات التشريق — بعد كل صلاة",
    "Entrer dans une mosquée": "دعاء دخول المسجد",
    "Sortir de la mosquée": "دعاء الخروج من المسجد",
    "Dua du voyage — aller": "دعاء السفر — ذهاب",
    "Dua du voyage — retour": "دعاء السفر — عودة",
    "Invocation pour les parents": "الدعاء للوالدين",
    "Invocation complète — protection": "دعاء شامل — حفظ"
  };
  const DUA_OCCASIONS_EN = {
    "La Talbiyah — dès l'Ihram jusqu'au 1er lancer du 10": "Talbiyah — from Ihram until 1st stone on day 10",
    "En voyant la Kaaba": "Upon seeing the Kaaba",
    "Au début du Tawaf — Pierre Noire": "Start of Tawaf — Black Stone",
    "Tawaf — entre le Coin Yéménite et la Pierre Noire": "Tawaf — between Yemeni Corner and Black Stone",
    "Tawaf — invocation libre": "Tawaf — free supplication",
    "Après le Tawaf — Maqam Ibrahim": "After Tawaf — Maqam Ibrahim",
    "Boire Zamzam": "Drinking Zamzam",
    "Au sommet du Safa": "At the top of Safa",
    "Durant le Sa'i — entre Safa et Marwa": "During Sa'i — between Safa and Marwa",
    "Jour d'Arafat — la MEILLEURE invocation": "Day of Arafat — the BEST supplication ⭐",
    "Arafat — demande de pardon": "Arafat — seeking forgiveness",
    "À Muzdalifah": "At Muzdalifah",
    "En lançant les cailloux (Jamarat)": "While stoning (Jamarat)",
    "Le sacrifice": "The sacrifice",
    "Takbir at-Tashriq — après chaque prière": "Takbir at-Tashriq — after every prayer",
    "Entrer dans une mosquée": "Entering a mosque",
    "Sortir de la mosquée": "Leaving a mosque",
    "Dua du voyage — aller": "Travel dua — departure",
    "Dua du voyage — retour": "Travel dua — return",
    "Invocation pour les parents": "Supplication for parents",
    "Invocation complète — protection": "Complete supplication — protection"
  };
  function renderDua() {
    const duasC = document.getElementById('duasContainer'); if (!duasC || !HAJJ_DATA.duas) return;
    duasC.innerHTML = HAJJ_DATA.duas.map(d => {
      const occ = lang === 'ar' ? (DUA_OCCASIONS_AR[d.occasion] || d.occasion) : lang === 'en' ? (DUA_OCCASIONS_EN[d.occasion] || d.occasion) : d.occasion;
      return `<div class="dua"><div class="dua-occ">${occ}</div><div class="dua-ar">${d.arabic}</div><div class="dua-tr">${d.transliteration}</div><div class="dua-fr">${lang === 'ar' ? '' : lang === 'en' ? '🇬🇧 ' : '🇫🇷 '}${d.translation}</div></div>`;
    }).join('');
  }

  // ============ FLASHCARDS ============
  function renderFC() {
    const f = fcs[fcIdx];
    const fa = document.getElementById('flashcardArea');
    if (!fa) return;
    fa.innerHTML = `<div class="fc-area"><div class="fc" onclick="this.classList.toggle('flip')">
      <div class="fc-face fc-front"><div class="fc-lbl">${lang==='ar'?'السؤال':'Question'}</div><div class="fc-q">${f.q}</div></div>
      <div class="fc-face fc-back"><div class="fc-lbl">${lang==='ar'?'الإجابة':lang==='en'?'Answer':'Réponse'}</div><div class="fc-a">${f.a}</div></div>
    </div></div>`;
    const cc = document.getElementById('fcCounter');
    if (cc) cc.textContent = (fcIdx+1)+'/'+fcs.length;
  }
  const fpBtn = document.getElementById('fcPrev');
  const fnBtn = document.getElementById('fcNext');
  const fsBtn = document.getElementById('fcShuffle');
  if (fpBtn) fpBtn.onclick = () => { fcIdx = (fcIdx-1+fcs.length)%fcs.length; renderFC(); };
  if (fnBtn) fnBtn.onclick = () => { fcIdx = (fcIdx+1)%fcs.length; renderFC(); };
  if (fsBtn) fsBtn.onclick = () => {
    for(let i=fcs.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[fcs[i],fcs[j]]=[fcs[j],fcs[i]]}
    fcIdx=0; renderFC();
  };
  document.addEventListener('keydown', e => {
    if(tab!=='flashcards')return;
    if(e.key==='ArrowLeft'){fcIdx=(fcIdx-1+fcs.length)%fcs.length;renderFC()}
    else if(e.key==='ArrowRight'){fcIdx=(fcIdx+1)%fcs.length;renderFC()}
    else if(e.key===' '){e.preventDefault();document.querySelector('.fc')?.classList.toggle('flip')}
  });

  // ============ HEALTH ============
  function renderHP() {
    const healthColors = {'💧':'var(--blue)','☀️':'var(--gold)','🦶':'var(--teal)','🤧':'var(--rose)','💊':'var(--rose)','🦷':'var(--t3)','👁️':'var(--teal)','🧠':'var(--gold)','🍎':'var(--grn)','🏥':'var(--rose)','😴':'var(--blue)','🧴':'var(--teal)','🩹':'var(--rose)','📱':'var(--gold)','🧳':'var(--t3)','🤝':'var(--grn)','🔥':'var(--rose)','🫁':'var(--teal)','🦠':'var(--rose)','🤰':'var(--grn)','👴':'var(--gold)','😷':'var(--blue)'};
    const hData = D('health'); if (!hData) return;
    (document.getElementById('healthContainer')||{}).innerHTML= hData.map(h => {
      const col = healthColors[h.emoji] || 'var(--teal)';
      return `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:0;box-shadow:var(--sh);overflow:hidden;transition:.3s" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shm)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--sh)'">
        <div style="display:flex;align-items:center;gap:12px;padding:16px 18px;background:linear-gradient(135deg,${col}11,transparent);border-bottom:1px solid var(--brd)">
          <span style="font-size:2rem;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:${col}15;border-radius:12px;flex-shrink:0">${h.emoji}</span>
          <h3 style="font-family:var(--fd);font-size:1rem;color:${col};margin:0;font-weight:700">${h.title}</h3>
        </div>
        <p style="font-size:.84rem;color:var(--t2);line-height:1.7;padding:14px 18px;margin:0">${h.desc}</p>
      </div>`;
    }).join('');
  }

  // ============ FAQ ============
  function renderFQ() {
    const c = document.getElementById('faqContainer'); if (!c) return;
    const faqData = D('faq');
    c.innerHTML = faqData.map((f) => `
      <div class="fq"><div class="fq-q"><span>${f.q}</span><span class="fq-arr">▼</span></div><div class="fq-a"><p>${f.a}</p></div></div>
    `).join('');
    c.querySelectorAll('.fq-q').forEach(q => q.onclick = () => q.parentElement.classList.toggle('open'));
  }

  // ============ CLASSIFICATION ============
  function renderClassif() {
    const d = D('classification'); if (!d) return;
    const pyramidSvg = `<svg viewBox="0 0 500 160" style="width:100%;max-width:500px;height:auto;margin:0 auto 16px;display:block">
      <polygon points="250,10 400,65 100,65" fill="rgba(220,53,69,.12)" stroke="#dc3545" stroke-width="2"/>
      <text x="250" y="48" text-anchor="middle" font-size="10" fill="#dc3545" font-weight="700">🔴 ARKAAN (4 Piliers)</text>
      <text x="250" y="60" text-anchor="middle" font-size="7" fill="#dc3545">Invalident le Hajj si omis</text>
      <polygon points="100,68 400,68 450,110 50,110" fill="rgba(240,173,78,.12)" stroke="#f0ad4e" stroke-width="2"/>
      <text x="250" y="92" text-anchor="middle" font-size="10" fill="#f0ad4e" font-weight="700">🟡 WAJIBAAT (7 Obligations)</text>
      <text x="250" y="104" text-anchor="middle" font-size="7" fill="#f0ad4e">Sacrifice compensatoire si omis</text>
      <polygon points="50,113 450,113 490,150 10,150" fill="rgba(40,167,69,.12)" stroke="#28a745" stroke-width="2"/>
      <text x="250" y="136" text-anchor="middle" font-size="10" fill="#28a745" font-weight="700">🟢 SUNAN (Recommandés)</text>
      <text x="250" y="148" text-anchor="middle" font-size="7" fill="#28a745">Bonus de récompense, aucune pénalité</text>
    </svg>`;
    (document.getElementById('classifContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${T("sectionClassif")}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      ${pyramidSvg}
      ${d.categories.map(cat => `
        <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;margin-bottom:16px;box-shadow:var(--sh);border-left:5px solid ${cat.color}">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
            <span style="font-size:1.6rem">${cat.emoji}</span>
            <h3 style="font-size:1.05rem;font-weight:700;color:${cat.color};margin:0">${cat.name}</h3>
          </div>
          <p style="font-size:.88rem;color:var(--t2);line-height:1.7;margin-bottom:14px">${cat.desc}</p>
          <div style="display:grid;gap:8px">
            ${cat.items.map(item => `
              <div style="display:flex;gap:10px;padding:10px 14px;background:var(--acc);border-radius:var(--r);border-left:3px solid ${cat.color}">
                <div style="min-width:28px;height:28px;border-radius:50%;background:${cat.color};color:#fff;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;flex-shrink:0">${cat.emoji}</div>
                <div><b style="font-size:.88rem;color:var(--t1)">${item.name}</b><p style="font-size:.82rem;color:var(--t2);margin:4px 0 0;line-height:1.6">${item.detail}</p></div>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  // ============ MAP / DISTANCES ============
  function renderMap() {
    const d = D('mapDistances'); if (!d) return;
    // SVG Map of Hajj route
    const mapSvg = `<svg viewBox="0 0 700 340" style="width:100%;height:auto;margin:0 auto;display:block" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="var(--teal)" stop-opacity=".08"/><stop offset="100%" stop-color="var(--gold)" stop-opacity=".04"/></linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="3" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="700" height="340" rx="16" fill="url(#mg1)" stroke="var(--brd)" stroke-width="1"/>
      <!-- Routes (dashed lines) -->
      <path d="M 120 250 Q 200 200 300 170" stroke="var(--gold)" stroke-width="2.5" fill="none" stroke-dasharray="8,5" opacity=".6"/>
      <path d="M 300 170 Q 430 130 540 100" stroke="var(--gold)" stroke-width="2.5" fill="none" stroke-dasharray="8,5" opacity=".6"/>
      <path d="M 540 100 L 480 200" stroke="var(--teal)" stroke-width="2.5" fill="none" stroke-dasharray="8,5" opacity=".6"/>
      <path d="M 480 200 L 300 170" stroke="var(--teal)" stroke-width="2.5" fill="none" stroke-dasharray="8,5" opacity=".6"/>
      <path d="M 300 170 Q 250 220 350 260" stroke="var(--rose)" stroke-width="2" fill="none" stroke-dasharray="6,4" opacity=".5"/>
      <!-- Distance labels on routes -->
      <text x="195" y="195" font-size="10" fill="var(--gold)" font-weight="700" font-family="sans-serif" transform="rotate(-15,195,195)">8 km</text>
      <text x="410" y="120" font-size="10" fill="var(--gold)" font-weight="700" font-family="sans-serif" transform="rotate(-10,410,120)">14 km</text>
      <text x="525" y="155" font-size="10" fill="var(--teal)" font-weight="700" font-family="sans-serif" transform="rotate(65,525,155)">9 km</text>
      <text x="370" y="175" font-size="10" fill="var(--teal)" font-weight="700" font-family="sans-serif">3-7 km</text>
      <!-- KAABA -->
      <circle cx="120" cy="250" r="32" fill="var(--card)" stroke="var(--gold)" stroke-width="3" filter="url(#glow)"/>
      <text x="120" y="245" text-anchor="middle" font-size="28">🕋</text>
      <text x="120" y="270" text-anchor="middle" font-size="9" fill="var(--t1)" font-weight="700" font-family="sans-serif">KAABA</text>
      <text x="120" y="295" text-anchor="middle" font-size="8" fill="var(--t3)" font-family="sans-serif">Masjid al-Haram</text>
      <!-- MINA -->
      <circle cx="300" cy="170" r="28" fill="var(--card)" stroke="var(--teal)" stroke-width="2.5"/>
      <text x="300" y="165" text-anchor="middle" font-size="24">🏕️</text>
      <text x="300" y="188" text-anchor="middle" font-size="9" fill="var(--t1)" font-weight="700" font-family="sans-serif">MINA</text>
      <text x="300" y="200" text-anchor="middle" font-size="7" fill="var(--t3)" font-family="sans-serif">Ville de tentes</text>
      <!-- ARAFAT -->
      <circle cx="540" cy="100" r="32" fill="var(--card)" stroke="var(--grn)" stroke-width="3" filter="url(#glow)"/>
      <text x="540" y="95" text-anchor="middle" font-size="28">⛰️</text>
      <text x="540" y="118" text-anchor="middle" font-size="9" fill="var(--grn)" font-weight="700" font-family="sans-serif">ARAFAT ⭐</text>
      <text x="540" y="130" text-anchor="middle" font-size="7" fill="var(--t3)" font-family="sans-serif">Pilier absolu</text>
      <!-- MUZDALIFAH -->
      <circle cx="480" cy="200" r="24" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/>
      <text x="480" y="196" text-anchor="middle" font-size="20">🌙</text>
      <text x="480" y="215" text-anchor="middle" font-size="8" fill="var(--t1)" font-weight="700" font-family="sans-serif">MUZDALIFAH</text>
      <!-- JAMARAT -->
      <circle cx="350" cy="260" r="22" fill="var(--card)" stroke="var(--rose)" stroke-width="2"/>
      <text x="350" y="257" text-anchor="middle" font-size="18">🪨</text>
      <text x="350" y="275" text-anchor="middle" font-size="8" fill="var(--t1)" font-weight="700" font-family="sans-serif">JAMARAT</text>
      <!-- Legend -->
      <rect x="20" y="15" width="180" height="55" rx="8" fill="var(--card)" stroke="var(--brd)" stroke-width="1" opacity=".9"/>
      <text x="30" y="32" font-size="9" fill="var(--t1)" font-weight="700" font-family="sans-serif">🗺️ ${lang==='ar'?'خريطة الحج':lang==='en'?'Hajj Map':'Carte du Hajj'}</text>
      <line x1="30" y1="42" x2="55" y2="42" stroke="var(--gold)" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="60" y="46" font-size="7.5" fill="var(--t3)" font-family="sans-serif">${lang==='ar'?'ذهاب':lang==='en'?'Going':'Aller'}</text>
      <line x1="90" y1="42" x2="115" y2="42" stroke="var(--teal)" stroke-width="2" stroke-dasharray="4,3"/>
      <text x="120" y="46" font-size="7.5" fill="var(--t3)" font-family="sans-serif">${lang==='ar'?'عودة':lang==='en'?'Return':'Retour'}</text>
      <text x="30" y="60" font-size="7" fill="var(--t3)" font-family="sans-serif">${lang==='ar'?'المجموع: ٣٠-٦٠ كم مشياً!':lang==='en'?'Total: 30-60 km walking!':'Total : 30-60 km de marche !'}</text>
    </svg>`;

    (document.getElementById('mapContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${T("sectionMap")}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:16px;box-shadow:var(--sh);margin-bottom:20px;overflow:hidden">${mapSvg}</div>
      <div style="display:grid;gap:10px;margin-bottom:20px">
        ${d.routes.map(r => `
          <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:14px 18px;box-shadow:var(--sh);display:flex;align-items:center;gap:14px;flex-wrap:wrap;transition:.2s" onmouseover="this.style.transform='translateX(3px)';this.style.boxShadow='var(--shm)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--sh)'">
            <div style="flex:1;min-width:180px">
              <div style="font-size:.88rem;font-weight:700;color:var(--t1)">${r.from} → ${r.to}</div>
              <div style="font-size:.76rem;color:var(--t3);margin-top:2px">${r.note}</div>
            </div>
            <div style="display:flex;gap:14px;align-items:center">
              <div style="text-align:center;padding:6px 12px;background:rgba(26,138,125,.08);border-radius:10px"><div style="font-size:1.1rem;font-weight:800;color:var(--teal)">${r.km}</div><div style="font-size:.6rem;color:var(--t3)">${lang==='ar'?'المسافة':'distance'}</div></div>
              <div style="text-align:center;padding:6px 12px;background:rgba(200,168,78,.08);border-radius:10px"><div style="font-size:.95rem;font-weight:700;color:var(--gold)">${r.walk}</div><div style="font-size:.6rem;color:var(--t3)">${lang==='ar'?'مشياً':lang==='en'?'on foot':'à pied'}</div></div>
              <span style="font-size:1.2rem">${r.emoji}</span>
            </div>
          </div>
        `).join('')}
      </div>
      <div style="background:linear-gradient(135deg,rgba(200,168,78,.1),rgba(200,168,78,.03));border-radius:var(--rr);padding:18px;border:2px solid rgba(200,168,78,.15);text-align:center">
        <span style="font-size:2rem">🏃</span>
        <p style="font-size:1rem;font-weight:700;color:var(--gold);margin:8px 0 4px">${d.totalWalk}</p>
        <p style="font-size:.82rem;color:var(--t3)">${lang==='ar'?'استعدوا بدنياً قبل ٢-٣ أشهر!':lang==='en'?'Prepare physically 2-3 months before!':'Préparez-vous physiquement 2-3 mois avant !'}</p>
      </div>
    `;
  }

  // ============ NUSUK INFO ============
  function renderNusuk() {
    const d = D('nusukInfo'); if (!d) return;
    (document.getElementById('nusukContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="background:linear-gradient(135deg,rgba(30,113,110,.06),transparent);border-radius:var(--rr);padding:18px;border:1px solid var(--brd);margin-bottom:16px">
        <p style="font-size:.9rem;color:var(--teal);font-weight:700;margin-bottom:6px">📅 Hajj 2026</p>
        <p style="font-size:.88rem;color:var(--t2);line-height:1.7">${d.hajj2026}</p>
      </div>
      <div class="grid" style="margin-bottom:20px">
        ${d.features.map(f => `
          <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh)">
            <span style="font-size:1.8rem">${f.icon}</span>
            <h4 style="font-size:.95rem;font-weight:700;color:var(--t1);margin:8px 0 6px">${f.name}</h4>
            <p style="font-size:.84rem;color:var(--t2);line-height:1.65">${f.desc}</p>
          </div>
        `).join('')}
      </div>
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:16px">
        <h4 style="font-size:1rem;font-weight:700;color:var(--grn);margin-bottom:12px">📋 ${lang==='ar'?'خطوات التسجيل على نسك':lang==='en'?'Nusuk Registration Steps':'Étapes d\'inscription sur Nusuk'}</h4>
        ${d.steps.map((s,i) => `
          <div style="display:flex;gap:10px;padding:8px 0;${i<d.steps.length-1?'border-bottom:1px solid var(--brd)':''}">
            <div style="min-width:26px;height:26px;border-radius:50%;background:var(--teal);color:#fff;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:700;flex-shrink:0">${i+1}</div>
            <p style="font-size:.86rem;color:var(--t1);line-height:1.6;margin:0">${s}</p>
          </div>
        `).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px">
        <a href="${d.website}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:var(--teal);color:#fff;border-radius:var(--rr);text-decoration:none;font-weight:600;font-size:.85rem">🌐 hajj.nusuk.sa</a>
        <a href="${d.app.android}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:var(--grn);color:#fff;border-radius:var(--rr);text-decoration:none;font-weight:600;font-size:.85rem">📱 Google Play</a>
        <a href="${d.app.ios}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:10px 18px;background:var(--blue);color:#fff;border-radius:var(--rr);text-decoration:none;font-weight:600;font-size:.85rem">🍎 App Store</a>
      </div>
    `;
  }

  // ============ EXTERNAL LINKS ============
  function renderLinks() {
    const d = (D('externalLinks')); if (!d) return;
    (document.getElementById('linksContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">🔗 ${lang==='ar'?'أفضل الموارد الخارجية':lang==='en'?'Best External Resources':'Meilleures Ressources Externes'}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${lang==='ar'?'أفضل الدروس والأدلة والأدوات لتحضير حجكم.':lang==='en'?'The best tutorials, guides and tools to prepare your Hajj.':'Les meilleurs tutoriels, guides et outils pour préparer votre Hajj.'}</p></div>
      ${d.map(cat => `
        <div style="margin-bottom:24px">
          <h3 style="font-size:1.05rem;font-weight:700;color:var(--teal);margin-bottom:12px">${cat.cat}</h3>
          <div style="display:grid;gap:10px">
            ${cat.links.map(l => `
              <a href="${l.url}" target="_blank" rel="noopener" style="display:block;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:16px 18px;box-shadow:var(--sh);text-decoration:none;transition:all .3s;border-left:4px solid var(--gold)">
                <div style="font-size:.92rem;font-weight:700;color:var(--t1);margin-bottom:4px">${l.title} ↗</div>
                <div style="font-size:.82rem;color:var(--t2);line-height:1.6">${l.desc}</div>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;
  }

  // ============ VIRTUAL TOUR with SVG diagrams ============
  function renderTour() {
    const d = D('virtualTour'); if (!d) return;
    // Animated parcours SVG
    const parcoursW = Math.min(800, window.innerWidth - 40);
    
    const parcoursSvg = `<svg viewBox="0 0 ${parcoursW} 120" style="width:100%;height:auto;margin:20px 0">
      <defs><linearGradient id="routeG" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="var(--teal)"/><stop offset="100%" stop-color="var(--gold)"/></linearGradient></defs>
      <line x1="30" y1="50" x2="${parcoursW-30}" y2="50" stroke="url(#routeG)" stroke-width="4" stroke-dasharray="8,4" opacity=".4"/>
      ${d.parcours.map((p,i) => {
        const x = 30 + i * (parcoursW-60) / (d.parcours.length-1);
        return `<g>
          <circle cx="${x}" cy="50" r="18" fill="var(--card)" stroke="var(--gold)" stroke-width="2"/>
          <text x="${x}" y="55" text-anchor="middle" font-size="16">${p.emoji}</text>
          <text x="${x}" y="80" text-anchor="middle" font-size="8" fill="var(--t1)" font-weight="600" font-family="sans-serif">${p.label}</text>
          <text x="${x}" y="95" text-anchor="middle" font-size="7" fill="var(--t3)" font-family="sans-serif">${p.day}</text>
          ${i < d.parcours.length-1 ? `<text x="${x + (parcoursW-60)/(d.parcours.length-1)/2}" y="45" text-anchor="middle" font-size="10" fill="var(--gold)">→</text>` : ''}
        </g>`;
      }).join('')}
    </svg>`;

    (document.getElementById('tourContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:20px;overflow-x:auto">
        <h3 style="font-size:1rem;color:var(--teal);margin-bottom:4px;font-weight:700">🗺️ Parcours du Hajj</h3>
        ${parcoursSvg}
      </div>
      <div class="grid">
        ${d.locations.map(loc => `
          <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);transition:.3s;overflow:hidden;position:relative">
            <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,var(--teal),var(--gold))"></div>
            <h3 style="font-size:1.05rem;font-weight:700;color:var(--teal);margin-bottom:12px">${loc.name}</h3>
            <div style="display:flex;flex-direction:column;gap:6px">
              ${(loc.facts).map(f => `
                <div style="display:flex;gap:8px;align-items:flex-start;padding:6px 10px;background:var(--acc);border-radius:8px;font-size:.84rem;line-height:1.5;color:var(--t1)">
                  <span style="color:var(--gold);font-weight:700;flex-shrink:0">•</span>${f}
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // ============ HANDICAP / PMR ============
  function renderHandicap() {
    const d = D('handicap'); if (!d) return;
    const catColors = {'♿':'var(--blue)','👴':'var(--gold)','🦯':'var(--teal)','🦻':'var(--rose)','🤰':'var(--grn)','🧠':'var(--gold)'};
    (document.getElementById('handicapContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      ${d.categories.map(cat => {
        const col = catColors[cat.icon] || 'var(--teal)';
        return `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:0;margin-bottom:14px;box-shadow:var(--sh);overflow:hidden">
          <div style="display:flex;align-items:center;gap:12px;padding:16px 18px;background:linear-gradient(135deg,${col}11,transparent);border-bottom:1px solid var(--brd)">
            <span style="font-size:2.2rem;width:48px;height:48px;display:flex;align-items:center;justify-content:center;background:${col}15;border-radius:12px;flex-shrink:0">${cat.icon}</span>
            <h3 style="font-size:1.05rem;font-weight:700;color:${col};margin:0">${cat.title}</h3>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:6px;padding:14px">
            ${cat.items.map(item => `
              <div style="display:flex;gap:10px;padding:10px 12px;background:var(--acc);border-radius:var(--r);align-items:flex-start;border-left:3px solid ${col};transition:.2s" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''">
                <span style="font-size:1.4rem;flex-shrink:0">${item.emoji}</span>
                <span style="font-size:.82rem;line-height:1.6;color:var(--t1)">${item.text}</span>
              </div>
            `).join('')}
          </div>
        </div>`;
      }).join('')}
    `;
  }

  // ============ PRACTICAL SITUATIONS ============
  function renderPractical() {
    const d = D('practicalSituations'); if (!d) return;
    const severityColors = { important: 'var(--gold)', urgent: 'var(--rose)', info: 'var(--teal)' };
    const severityLabels = { important: '⚠️ Important', urgent: '🚨 Urgent', info: 'ℹ️ Info' };
    const pc = document.getElementById('practicalContainer'); if (!pc) return;
    pc.innerHTML = `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="display:grid;gap:12px">
        ${d.situations.map((s) => `
          <div class="fq" style="border-left:4px solid ${severityColors[s.severity] || 'var(--teal)'}">
            <div class="fq-q" style="gap:10px">
              <span style="font-size:1.4rem;flex-shrink:0">${s.emoji}</span>
              <span style="flex:1">${s.q}</span>
              <span style="font-size:.65rem;padding:3px 8px;border-radius:12px;background:${severityColors[s.severity]};color:#fff;white-space:nowrap">${severityLabels[s.severity]}</span>
              <span class="fq-arr">▼</span>
            </div>
            <div class="fq-a">
              <div style="padding:0 18px 16px">
                <p style="font-size:.88rem;color:var(--t1);line-height:1.75;margin-bottom:8px">${s.a}</p>
                ${s.madhab ? `<div style="font-size:.78rem;color:var(--t3);font-style:italic;padding-top:6px;border-top:1px solid var(--brd)">📚 ${s.madhab}</div>` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    pc.querySelectorAll('.fq-q').forEach(q => q.onclick = () => q.parentElement.classList.toggle('open'));
  }

  // ============ HEAT SAFETY ============
  function renderHeat() {
    const d = D('heatSafety'); if (!d) return;
    const thermoSvg = `<svg viewBox="0 0 120 220" style="width:90px;height:auto;flex-shrink:0">
      <defs><linearGradient id="thG" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#e74c3c"/><stop offset="60%" stop-color="#e74c3c"/><stop offset="100%" stop-color="#f39c12"/></linearGradient></defs>
      <rect x="42" y="20" width="36" height="150" rx="18" fill="var(--acc)" stroke="var(--brd)" stroke-width="2"/>
      <rect x="46" y="44" width="28" height="122" rx="14" fill="url(#thG)" opacity=".85"><animate attributeName="height" from="20" to="122" dur="2s" fill="freeze"/><animate attributeName="y" from="146" to="44" dur="2s" fill="freeze"/></rect>
      <circle cx="60" cy="185" r="22" fill="#e74c3c" opacity=".9"/>
      <text x="60" y="192" text-anchor="middle" font-size="11" fill="#fff" font-weight="700" font-family="sans-serif">51.8°</text>
      <text x="60" y="15" text-anchor="middle" font-size="8" fill="var(--t3)" font-family="sans-serif">°C</text>
      <!-- Scale marks -->
      <text x="85" y="50" font-size="7" fill="var(--t3)" font-family="sans-serif">50°</text>
      <text x="85" y="85" font-size="7" fill="var(--t3)" font-family="sans-serif">40°</text>
      <text x="85" y="120" font-size="7" fill="var(--t3)" font-family="sans-serif">30°</text>
      <text x="85" y="150" font-size="7" fill="var(--t3)" font-family="sans-serif">20°</text>
      <line x1="78" y1="47" x2="82" y2="47" stroke="var(--t3)" stroke-width="1"/>
      <line x1="78" y1="82" x2="82" y2="82" stroke="var(--t3)" stroke-width="1"/>
      <line x1="78" y1="117" x2="82" y2="117" stroke="var(--t3)" stroke-width="1"/>
      <line x1="78" y1="147" x2="82" y2="147" stroke="var(--t3)" stroke-width="1"/>
    </svg>`;

    (document.getElementById('heatContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--rose);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;margin-bottom:20px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh)">
        ${thermoSvg}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;flex:1;min-width:220px">
          ${d.stats.map(s => `<div style="background:linear-gradient(135deg,rgba(196,90,107,.1),rgba(196,90,107,.03));border:1px solid rgba(196,90,107,.15);border-radius:var(--r);padding:14px;text-align:center"><div style="font-size:1.5rem;font-weight:800;color:var(--rose)">${s.num}</div><div style="font-size:.72rem;color:var(--t2);margin-top:4px;line-height:1.3">${s.label}</div></div>`).join('')}
        </div>
      </div>
      <div style="display:grid;gap:10px;margin-bottom:20px">
        ${d.protocol.map(p => `<div style="display:flex;gap:12px;align-items:flex-start;padding:16px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);box-shadow:var(--sh);border-left:4px solid var(--rose);transition:.2s" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''"><span style="font-size:1.8rem;flex-shrink:0">${p.icon}</span><div><b style="font-size:.92rem;color:var(--t1)">${p.title}</b><p style="font-size:.84rem;color:var(--t2);line-height:1.65;margin:4px 0 0">${p.desc}</p></div></div>`).join('')}
      </div>
      <div style="background:linear-gradient(135deg,rgba(46,125,82,.08),transparent);border-radius:var(--rr);padding:18px;border:1px solid var(--brd)"><b style="color:var(--grn);font-size:.9rem">🛡️ Ce qui a changé depuis 2024</b><p style="font-size:.84rem;color:var(--t2);line-height:1.65;margin-top:6px">${d.whatChanged}</p></div>
    `;
  }

  // ============ TOP ERRORS ============
  function renderErrors() {
    const d = D('topErrors');
    if (!d) return;
    (document.getElementById('errorsContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--rose);margin-bottom:8px">${T("sectionErrors")}</h2></div>
      <div style="display:grid;gap:12px">
        ${d.items.map((e) => `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);box-shadow:var(--sh);overflow:hidden;transition:.3s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
          <div style="display:flex;align-items:center;gap:12px;padding:14px 18px;background:rgba(196,90,107,.06);border-bottom:1px solid var(--brd)">
            <span style="font-size:1.6rem;width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:rgba(196,90,107,.12);border-radius:10px;flex-shrink:0">${e.emoji}</span>
            <div style="font-size:.88rem;font-weight:700;color:var(--rose)">❌ ${e.error}</div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:10px;padding:14px 18px;background:rgba(46,125,82,.04)">
            <span style="font-size:1.1rem;flex-shrink:0;margin-top:1px">✅</span>
            <div style="font-size:.84rem;color:var(--t1);line-height:1.6">${e.fix}</div>
          </div>
        </div>`).join('')}
      </div>
    `;
  }

  // ============ HAJJ TYPES ============
  function renderTypes() {
    const d = D('hajjTypes'); if (!d) return;
    const compSvg = `<svg viewBox="0 0 600 110" style="width:100%;height:auto;margin-bottom:16px">
      <rect width="600" height="110" rx="10" fill="var(--acc)" opacity=".4"/>
      <text x="300" y="18" text-anchor="middle" font-size="9" fill="var(--gold)" font-weight="700">${lang==='ar'?'مقارنة سريعة':lang==='en'?'QUICK COMPARISON':'COMPARAISON RAPIDE'}</text>
      <!-- Headers -->
      <rect x="10" y="26" width="140" height="22" rx="4" fill="var(--card)"/><text x="80" y="41" text-anchor="middle" font-size="7.5" fill="var(--t3)" font-weight="600"></text>
      <rect x="155" y="26" width="145" height="22" rx="4" fill="rgba(40,167,69,.15)"/><text x="227" y="41" text-anchor="middle" font-size="8" fill="#28a745" font-weight="700">⭐ TAMATTU'</text>
      <rect x="305" y="26" width="145" height="22" rx="4" fill="rgba(240,173,78,.15)"/><text x="377" y="41" text-anchor="middle" font-size="8" fill="#f0ad4e" font-weight="700">QIRAN</text>
      <rect x="455" y="26" width="135" height="22" rx="4" fill="rgba(108,117,125,.15)"/><text x="522" y="41" text-anchor="middle" font-size="8" fill="#6c757d" font-weight="700">IFRAD</text>
      <!-- Row 1: Omra -->
      <text x="80" y="66" text-anchor="middle" font-size="7.5" fill="var(--t2)" font-weight="600">${lang==='ar'?'تشمل عمرة؟':lang==='en'?'Umrah included?':'Omra incluse ?'}</text>
      <text x="227" y="66" text-anchor="middle" font-size="9" fill="#28a745">✅ Oui</text>
      <text x="377" y="66" text-anchor="middle" font-size="9" fill="#f0ad4e">✅ Combinée</text>
      <text x="522" y="66" text-anchor="middle" font-size="9" fill="#6c757d">❌ Non</text>
      <!-- Row 2: Pause -->
      <text x="80" y="82" text-anchor="middle" font-size="7.5" fill="var(--t2)" font-weight="600">${lang==='ar'?'فترة تحلل؟':lang==='en'?'Ihram break?':'Pause d\'Ihram ?'}</text>
      <text x="227" y="82" text-anchor="middle" font-size="9" fill="#28a745">✅ Oui</text>
      <text x="377" y="82" text-anchor="middle" font-size="9" fill="#f0ad4e">❌ Non</text>
      <text x="522" y="82" text-anchor="middle" font-size="9" fill="#6c757d">❌ Non</text>
      <!-- Row 3: Sacrifice -->
      <text x="80" y="98" text-anchor="middle" font-size="7.5" fill="var(--t2)" font-weight="600">${lang==='ar'?'ذبح؟':lang==='en'?'Sacrifice?':'Sacrifice ?'}</text>
      <text x="227" y="98" text-anchor="middle" font-size="9" fill="#28a745">✅ Requis</text>
      <text x="377" y="98" text-anchor="middle" font-size="9" fill="#f0ad4e">✅ Requis</text>
      <text x="522" y="98" text-anchor="middle" font-size="9" fill="#6c757d">❌ Non requis</text>
    </svg>`;
    (document.getElementById('typesContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      ${compSvg}
      <div style="display:grid;gap:14px">
        ${d.types.map(t => `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);border-left:5px solid ${t.color}">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px"><span style="font-size:1.4rem">${t.emoji}</span><h3 style="font-size:1.05rem;font-weight:700;color:${t.color};margin:0">${t.name}</h3></div>
          <p style="font-size:.88rem;color:var(--t2);line-height:1.6;margin-bottom:12px">${t.desc}</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:.82rem">
            <div style="padding:8px 10px;background:var(--acc);border-radius:var(--r)"><b>${lang==='ar'?'عمرة؟':lang==='en'?'Umrah?':'Omra ?'}</b> ${t.omra}</div>
            <div style="padding:8px 10px;background:var(--acc);border-radius:var(--r)"><b>${lang==='ar'?'تحلل؟':lang==='en'?'Break?':'Pause ?'}</b> ${t.pauseIhram}</div>
            <div style="padding:8px 10px;background:var(--acc);border-radius:var(--r)"><b>${lang==='ar'?'ذبح؟':lang==='en'?'Sacrifice?':'Sacrifice ?'}</b> ${t.sacrifice}</div>
            <div style="padding:8px 10px;background:var(--acc);border-radius:var(--r)"><b>+</b> ${t.avantages}</div>
          </div>
        </div>`).join('')}
      </div>
    `;
  }

  // ============ MEDINA ============
  function renderMedina() {
    const d = D('medinaGuide'); if (!d) return;
    const r = d.rawdah;
    const rawdahSvg = `<svg viewBox="0 0 500 200" style="width:100%;height:auto;margin:10px 0">
      <rect width="500" height="200" rx="12" fill="var(--acc)" stroke="var(--brd)" stroke-width="1" opacity=".5"/>
      <!-- Mosque outline -->
      <rect x="40" y="30" width="420" height="140" rx="8" fill="var(--card)" stroke="var(--brd)" stroke-width="1.5"/>
      <text x="250" y="22" text-anchor="middle" font-size="9" fill="var(--t3)" font-weight="600" font-family="sans-serif">MASJID AN-NABAWI (plan simplifié)</text>
      <!-- Rawdah (green zone) -->
      <rect x="170" y="60" width="160" height="80" rx="6" fill="rgba(46,125,82,.15)" stroke="var(--grn)" stroke-width="2"/>
      <text x="250" y="85" text-anchor="middle" font-size="11" fill="var(--grn)" font-weight="700" font-family="sans-serif">🌿 RAWDAH</text>
      <text x="250" y="100" text-anchor="middle" font-size="8" fill="var(--grn)" font-family="sans-serif">Jardin du Paradis</text>
      <text x="250" y="115" text-anchor="middle" font-size="7" fill="var(--t3)" font-family="sans-serif">Tapis vert • ~10 min</text>
      <!-- Minbar -->
      <rect x="145" y="75" width="20" height="40" rx="4" fill="rgba(200,168,78,.2)" stroke="var(--gold)" stroke-width="1.5"/>
      <text x="155" y="100" text-anchor="middle" font-size="6" fill="var(--gold)" font-weight="700" font-family="sans-serif">Minbar</text>
      <!-- Sacred Chamber -->
      <rect x="335" y="65" width="55" height="60" rx="4" fill="rgba(200,168,78,.15)" stroke="var(--gold)" stroke-width="1.5"/>
      <text x="362" y="90" text-anchor="middle" font-size="6.5" fill="var(--gold)" font-weight="700" font-family="sans-serif">Chambre</text>
      <text x="362" y="100" text-anchor="middle" font-size="6" fill="var(--gold)" font-family="sans-serif">Sacrée ﷺ</text>
      <!-- Gates -->
      <rect x="170" y="140" width="40" height="18" rx="4" fill="rgba(59,125,216,.15)" stroke="var(--blue)" stroke-width="1"/>
      <text x="190" y="153" text-anchor="middle" font-size="6" fill="var(--blue)" font-weight="700" font-family="sans-serif">Gate 37 ♂</text>
      <rect x="290" y="140" width="40" height="18" rx="4" fill="rgba(196,90,107,.15)" stroke="var(--rose)" stroke-width="1"/>
      <text x="310" y="153" text-anchor="middle" font-size="6" fill="var(--rose)" font-weight="700" font-family="sans-serif">Gate 25 ♀</text>
      <!-- Qibla arrow -->
      <text x="80" y="105" text-anchor="middle" font-size="8" fill="var(--t3)" font-family="sans-serif">← Qibla</text>
      <line x1="95" y1="100" x2="140" y2="100" stroke="var(--t3)" stroke-width="1" stroke-dasharray="3,2" marker-end="none"/>
    </svg>`;

    (document.getElementById('medinaContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--grn);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="background:linear-gradient(135deg,rgba(46,125,82,.08),transparent);border:2px solid rgba(46,125,82,.15);border-radius:var(--rr);padding:20px;margin-bottom:16px">
        <h3 style="font-size:1.1rem;color:var(--grn);margin-bottom:10px">${r.title}</h3>
        <p style="font-size:.88rem;color:var(--t2);line-height:1.7;margin-bottom:14px">${r.desc}</p>
        ${rawdahSvg}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;font-size:.82rem">
          <div style="padding:10px;background:var(--card);border-radius:var(--r)"><b>👨 Hommes :</b> ${r.horaires.hommes}<br><b>Porte :</b> ${r.portes.hommes}</div>
          <div style="padding:10px;background:var(--card);border-radius:var(--r)"><b>👩 Femmes :</b> ${r.horaires.femmes}<br><b>Porte :</b> ${r.portes.femmes}</div>
        </div>
        <div style="display:grid;gap:6px;margin-bottom:12px">${r.booking.map((b,i) => `<div style="display:flex;gap:8px;padding:8px 10px;background:var(--card);border-radius:var(--r);font-size:.82rem;border-left:3px solid var(--grn)"><span style="min-width:22px;height:22px;border-radius:50%;background:var(--grn);color:#fff;font-size:.65rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</span>${b}</div>`).join('')}</div>
        <div style="padding:10px 14px;background:rgba(200,168,78,.1);border-radius:var(--r);font-size:.82rem;border-left:3px solid var(--gold)"><b>💡</b> ${r.astuce}</div>
        <div style="display:flex;gap:12px;margin-top:10px;font-size:.78rem;color:var(--t3)"><span>⏱️ Durée : ${r.duree}</span><span>🔒 Limite : ${r.limite}</span></div>
      </div>
      <div class="grid">${d.sites.map(s => `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:16px;box-shadow:var(--sh)"><span style="font-size:1.6rem">${s.emoji}</span><h4 style="font-size:.95rem;color:var(--grn);margin:6px 0">${s.name}</h4><p style="font-size:.82rem;color:var(--t2);line-height:1.6">${s.desc}</p></div>`).join('')}</div>
      <div style="margin-top:14px;padding:12px 16px;background:var(--acc);border-radius:var(--r);font-size:.84rem;color:var(--t2)">🚄 ${d.transport}</div>
    `;
  }

  // ============ APPS ============
  function renderApps() {
    const d = D('recommendedApps'); if (!d) return;
    (document.getElementById('appsContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;margin-bottom:16px">
        ${d.apps.map(a => {
          const isReq = a.cat === 'OBLIGATOIRE';
          return `<div style="display:flex;gap:14px;align-items:flex-start;padding:16px;background:var(--card);border:1px solid ${isReq?'var(--rose)':'var(--brd)'};border-radius:var(--rr);box-shadow:var(--sh);transition:.3s${isReq?';border-width:2px':''}" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shm)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--sh)'">
            <div style="width:48px;height:48px;border-radius:12px;background:${isReq?'linear-gradient(135deg,var(--rose),#e8757f)':'linear-gradient(135deg,var(--acc),var(--card))'};display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0;border:1px solid ${isReq?'var(--rose)':'var(--brd)'}">${a.icon}</div>
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;flex-wrap:wrap">
                <b style="font-size:.9rem;color:var(--t1)">${a.name}</b>
                <span style="font-size:.6rem;padding:2px 8px;border-radius:8px;background:${isReq?'var(--rose)':'rgba(200,168,78,.12)'};color:${isReq?'#fff':'var(--gold)'};font-weight:600">${a.cat}</span>
              </div>
              <p style="font-size:.78rem;color:var(--t2);line-height:1.5;margin:0 0 6px">${a.desc}</p>
              <div style="display:flex;gap:8px;align-items:center">
                ${a.ios?'<span style="font-size:.62rem;padding:2px 6px;border-radius:6px;background:var(--acc);color:var(--t3)">🍎 iOS</span>':''}
                ${a.android?'<span style="font-size:.62rem;padding:2px 6px;border-radius:6px;background:var(--acc);color:var(--t3)">🤖 Android</span>':''}
                ${!a.ios && !a.android?'<span style="font-size:.62rem;padding:2px 6px;border-radius:6px;background:var(--acc);color:var(--t3)">🌐 Web</span>':''}
                <span style="font-size:.65rem;color:var(--gold)">⭐⭐⭐⭐</span>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div style="padding:14px 18px;background:var(--acc);border-radius:var(--rr);font-size:.84rem;color:var(--t2);line-height:1.6">💡 ${d.tips}</div>
    `;
  }

  // ============ COSTS ============
  function renderCosts() {
    const d = D('costs'); if (!d) return;
    // Parse the avg value to get a number for bar width (rough mapping)
    const avgMap = {'France':9500,'Royaume-Uni':8000,'États-Unis':12000,'Canada':13000,'Algérie':6000,'Maroc':8000,'Tunisie':7000};
    const maxAvg = 13000;
    (document.getElementById('costsContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><p style="font-size:.9rem;color:var(--t2);line-height:1.7">${d.intro}</p></div>
      <div style="display:grid;gap:12px;margin-bottom:16px">
        ${d.countries.map(c => {
          const avg = avgMap[c.country] || 8000;
          const pct = Math.round(avg / maxAvg * 100);
          return `<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh);overflow:hidden">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px"><span style="font-size:1.8rem">${c.flag}</span><h3 style="font-size:1rem;font-weight:700;color:var(--t1);margin:0;flex:1">${c.country}</h3>${c.quota?`<span style="font-size:.68rem;padding:3px 10px;border-radius:12px;background:rgba(26,138,125,.1);color:var(--teal);font-weight:600">${c.quota}</span>`:''}</div>
          <div style="display:flex;gap:8px;margin-bottom:12px">
            <div style="flex:1;padding:10px;background:rgba(26,138,125,.06);border-radius:var(--r);text-align:center;border:1px solid rgba(26,138,125,.1)"><div style="font-size:.6rem;color:var(--teal);font-weight:600;margin-bottom:2px">ÉCONOMIQUE</div><div style="font-size:.78rem;font-weight:700;color:var(--teal)">${c.eco}</div></div>
            <div style="flex:1;padding:10px;background:rgba(200,168,78,.06);border-radius:var(--r);text-align:center;border:1px solid rgba(200,168,78,.1)"><div style="font-size:.6rem;color:var(--gold);font-weight:600;margin-bottom:2px">STANDARD</div><div style="font-size:.78rem;font-weight:700;color:var(--gold)">${c.std}</div></div>
            <div style="flex:1;padding:10px;background:rgba(196,90,107,.06);border-radius:var(--r);text-align:center;border:1px solid rgba(196,90,107,.1)"><div style="font-size:.6rem;color:var(--rose);font-weight:600;margin-bottom:2px">LUXE</div><div style="font-size:.78rem;font-weight:700;color:var(--rose)">${c.lux}</div></div>
          </div>
          <div style="margin-bottom:8px"><div style="height:6px;background:var(--acc);border-radius:6px;overflow:hidden"><div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--teal),var(--gold));border-radius:6px;transition:width 1s"></div></div><div style="font-size:.65rem;color:var(--t3);margin-top:3px">Moyenne ~${c.avg}</div></div>
          <div style="font-size:.76rem;color:var(--t3);line-height:1.4">${c.note}</div>
        </div>`;}).join('')}
      </div>
      <div style="padding:14px 18px;background:var(--acc);border-radius:var(--rr);font-size:.84rem;color:var(--t2);line-height:1.6;margin-bottom:10px">💸 ${d.extras}</div>
      <div style="padding:14px 18px;background:linear-gradient(135deg,rgba(30,113,110,.06),transparent);border-radius:var(--rr);font-size:.84rem;color:var(--t2);line-height:1.6"><b>📅 Durées de séjour :</b> Court : ${d.sejours.court} • Moyen : ${d.sejours.moyen} • Long : ${d.sejours.long}</div>
    `;
  }

  // ============ DATES ============
  function renderDates() {
    const d = D('hajjDates'); if (!d) return;
    
    // Full MAI 2026 calendar grid
    // Mai 2026: starts on Friday (Ven=5), 31 days
    // Hajj days: ~25-30 Mai
    const hajjDays = {25:'🏕️',26:'⛰️',27:'🎉',28:'🪨',29:'🪨',30:'👋'};
    const hajjLabels = {25:'Mina',26:'Arafat',27:'Aïd',28:'Tashriq',29:'Tashriq',30:'Adieu'};
    const hajjColors = {25:'#1a8a7d',26:'#2e7d52',27:'#c45a6b',28:'#c8a84e',29:'#c8a84e',30:'#9a8c7a'};
    let calHTML = '<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh);margin-bottom:16px;overflow-x:auto">';
    calHTML += '<div style="text-align:center;font-family:var(--fd);font-size:1.1rem;color:var(--gold);margin-bottom:12px">📅 Mai 2026 — Dhul Hijjah 1447</div>';
    calHTML += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;text-align:center">';
    // Headers
    ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'].forEach(function(d2) {
      calHTML += '<div style="font-size:.65rem;font-weight:700;color:var(--t3);padding:4px 0">'+d2+'</div>';
    });
    // Mai 2026 starts on Friday → offset = 4 empty cells (Lun-Jeu)
    for (var e = 0; e < 4; e++) { calHTML += '<div></div>'; }
    for (var day = 1; day <= 31; day++) {
      var isHajj = hajjDays[day];
      var col = hajjColors[day] || '';
      var label = hajjLabels[day] || '';
      if (isHajj) {
        calHTML += '<div style="padding:4px 2px;background:'+col+'18;border:2px solid '+col+';border-radius:8px;position:relative">';
        calHTML += '<div style="font-size:.7rem;font-weight:700;color:'+col+'">'+day+'</div>';
        calHTML += '<div style="font-size:.85rem;margin:2px 0">'+isHajj+'</div>';
        calHTML += '<div style="font-size:.5rem;color:'+col+';font-weight:600">'+label+'</div>';
        calHTML += '</div>';
      } else {
        calHTML += '<div style="padding:6px 2px;font-size:.72rem;color:var(--t3)">'+day+'</div>';
      }
    }
    calHTML += '</div></div>';

    // Timeline SVG
    var tlSvg = '<svg viewBox="0 0 650 70" style="width:100%;height:auto;margin-bottom:16px">';
    tlSvg += '<rect width="650" height="70" rx="10" fill="var(--acc)" opacity=".3"/>';
    tlSvg += '<line x1="40" y1="30" x2="610" y2="30" stroke="var(--gold)" stroke-width="3" stroke-linecap="round"/>';
    var tlDays = [{x:55,em:'🏕️',lb:'8 DH',col:'#1a8a7d'},{x:165,em:'⛰️',lb:'9 DH ⭐',col:'#2e7d52'},{x:280,em:'🎉',lb:'10 DH',col:'#c45a6b'},{x:390,em:'🪨',lb:'11-12',col:'#c8a84e'},{x:500,em:'🕋',lb:'Tawaf',col:'#c8a84e'},{x:595,em:'👋',lb:'Adieu',col:'#9a8c7a'}];
    tlDays.forEach(function(t) {
      tlSvg += '<circle cx="'+t.x+'" cy="30" r="10" fill="'+t.col+'" opacity=".2"/>';
      tlSvg += '<text x="'+t.x+'" y="24" text-anchor="middle" font-size="14">'+t.em+'</text>';
      tlSvg += '<text x="'+t.x+'" y="52" text-anchor="middle" font-size="7" fill="'+t.col+'" font-weight="700" font-family="sans-serif">'+t.lb+'</text>';
    });
    // Arrows between stops
    [110,220,335,445,548].forEach(function(ax) {
      tlSvg += '<text x="'+ax+'" y="33" text-anchor="middle" font-size="10" fill="var(--gold)">→</text>';
    });
    tlSvg += '</svg>';

    (document.getElementById('datesContainer')||{}).innerHTML= `
      <div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">${d.title}</h2><div style="padding:12px 16px;background:rgba(200,168,78,.1);border:2px solid rgba(200,168,78,.2);border-radius:var(--rr);font-size:.85rem;color:var(--gold);line-height:1.6;margin-bottom:16px">${d.warning}</div></div>
      ${calHTML}
      ${tlSvg}
      <div style="display:grid;gap:10px;margin-bottom:20px">
        ${d.dates.map(dt => {
          const gcalDates = {
            '1 Dhul Hijjah': {start:'20260518',end:'20260519',sIso:'2026-05-18',eIso:'2026-05-19'},
            '8 Dhul Hijjah': {start:'20260525',end:'20260526',sIso:'2026-05-25',eIso:'2026-05-26'},
            '9 Dhul Hijjah': {start:'20260526',end:'20260527',sIso:'2026-05-26',eIso:'2026-05-27'},
            '10 Dhul Hijjah': {start:'20260527',end:'20260528',sIso:'2026-05-27',eIso:'2026-05-28'},
            '11-13 Dhul Hijjah': {start:'20260528',end:'20260531',sIso:'2026-05-28',eIso:'2026-05-31'}
          };
          const cal = gcalDates[dt.hijri];
          if (!cal) return `<div style="display:flex;gap:14px;align-items:center;padding:14px 18px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);box-shadow:var(--sh)">
            <span style="font-size:1.8rem;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(200,168,78,.08);border-radius:10px;flex-shrink:0">${dt.emoji}</span>
            <div style="flex:1"><div style="font-size:.9rem;font-weight:700;color:var(--t1)">${dt.event}</div><div style="font-size:.76rem;color:var(--t3);margin-top:2px">${dt.hijri}</div></div>
            <div style="font-size:.9rem;font-weight:700;color:var(--teal);padding:4px 10px;background:rgba(26,138,125,.08);border-radius:8px">${dt.greg}</div>
          </div>`;
          const title = 'Hajj 2026 — ' + dt.event.replace(/ ⭐/g,'').replace(/ 🎉/g,'');
          const desc = dt.hijri + ' — ' + dt.event + ' (±1 jour selon observation lunaire)';
          const gcalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(title) + '&dates=' + cal.start + '/' + cal.end + '&details=' + encodeURIComponent(desc) + '&location=' + encodeURIComponent('Makkah, Saudi Arabia');
          const outlookUrl = 'https://outlook.live.com/calendar/0/action/compose?subject=' + encodeURIComponent(title) + '&startdt=' + cal.sIso + '&enddt=' + cal.eIso + '&body=' + encodeURIComponent(desc) + '&location=' + encodeURIComponent('Makkah, Saudi Arabia');
          const uid = 'hajj2026-' + dt.hijri.replace(/[^a-z0-9]/gi,'');
          const icsData = 'BEGIN:VCALENDAR\\nVERSION:2.0\\nBEGIN:VEVENT\\nDTSTART;VALUE=DATE:' + cal.start + '\\nDTEND;VALUE=DATE:' + cal.end + '\\nSUMMARY:' + title + '\\nDESCRIPTION:' + desc + '\\nLOCATION:Makkah Saudi Arabia\\nUID:' + uid + '\\nEND:VEVENT\\nEND:VCALENDAR';
          return `<div style="display:flex;gap:14px;align-items:center;padding:14px 18px;background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);box-shadow:var(--sh);transition:.2s;flex-wrap:wrap" onmouseover="this.style.transform='translateX(3px)'" onmouseout="this.style.transform=''">
            <span style="font-size:1.8rem;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(200,168,78,.08);border-radius:10px;flex-shrink:0">${dt.emoji}</span>
            <div style="flex:1;min-width:140px"><div style="font-size:.9rem;font-weight:700;color:var(--t1)">${dt.event}</div><div style="font-size:.76rem;color:var(--t3);margin-top:2px">${dt.hijri}</div></div>
            <div style="font-size:.9rem;font-weight:700;color:var(--teal);padding:4px 10px;background:rgba(26,138,125,.08);border-radius:8px;white-space:nowrap">${dt.greg}</div>
            <div style="display:flex;gap:4px;flex-wrap:wrap">
              <a href="${gcalUrl}" target="_blank" rel="noopener" style="padding:4px 8px;background:rgba(66,133,244,.08);border:1px solid rgba(66,133,244,.2);border-radius:6px;font-size:.62rem;font-weight:600;color:#4285f4;text-decoration:none;white-space:nowrap" title="Google Calendar">📅 Google</a>
              <a href="${outlookUrl}" target="_blank" rel="noopener" style="padding:4px 8px;background:rgba(0,120,212,.08);border:1px solid rgba(0,120,212,.2);border-radius:6px;font-size:.62rem;font-weight:600;color:#0078d4;text-decoration:none;white-space:nowrap" title="Outlook">📧 Outlook</a>
              <a href="data:text/calendar;charset=utf-8,${encodeURIComponent(icsData.replace(/\\n/g,'\r\n'))}" download="hajj-${cal.start}.ics" style="padding:4px 8px;background:rgba(46,125,82,.08);border:1px solid rgba(46,125,82,.2);border-radius:6px;font-size:.62rem;font-weight:600;color:var(--grn);text-decoration:none;white-space:nowrap" title="Apple Calendar / Android / Tout calendrier">🍎 .ics</a>
            </div>
          </div>`;
        }).join('')}
      </div>
      <div style="background:linear-gradient(135deg,rgba(200,168,78,.08),rgba(200,168,78,.02));border:2px solid rgba(200,168,78,.2);border-radius:var(--rr);padding:22px;margin-bottom:20px;text-align:center">
        <h4 style="font-size:1.05rem;color:var(--gold);margin-bottom:12px">${T('addAllTitle')}</h4>
        <p style="font-size:.8rem;color:var(--t3);margin-bottom:16px">${T('addAllDesc')}</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:16px">
          <button onclick="addAllToGoogle()" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#4285f4;color:#fff;border:none;border-radius:22px;font-size:.85rem;font-weight:700;cursor:pointer;box-shadow:0 3px 12px rgba(66,133,244,.3);transition:.3s;font-family:var(--fu)" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform=''">📅 Google Calendar</button>
          <button onclick="downloadHajjICS()" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:var(--card);color:var(--t1);border:1px solid var(--brd);border-radius:22px;font-size:.85rem;font-weight:700;cursor:pointer;box-shadow:var(--sh);transition:.3s;font-family:var(--fu)" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform=''">🍎 Apple · Android · Outlook (.ics)</button>
        </div>
        <details style="text-align:left;background:var(--card);border-radius:var(--r);padding:10px 14px;font-size:.75rem;color:var(--t3);cursor:pointer">
          <summary style="font-weight:600;color:var(--t2)">${T('seeEvents')}</summary>
          <div style="margin-top:8px;display:grid;gap:3px">
            ${lang==='ar'?`
            <div>٢٥/٠٥ ٠٥ص — غسل + إحرام + تلبية</div>
            <div>٢٥/٠٥ ٠٩ص — الانطلاق إلى منى</div>
            <div>٢٥/٠٥ ١ظ — الظهر في منى</div>
            <div>٢٥/٠٥ ٤ع — العصر في منى</div>
            <div>٢٦/٠٥ ٠٥ص — الفجر + الانطلاق لعرفة</div>
            <div style="color:var(--grn);font-weight:600">٢٦/٠٥ ١٢ظ — ⭐ عرفة ⭐</div>
            <div>٢٦/٠٥ ٧:٣٠م — مزدلفة</div>
            <div>٢٧/٠٥ ٠٨ص — رمي الجمرات</div>
            <div style="color:var(--rose);font-weight:600">٢٧/٠٥ ١٠ص — الذبح + العيد 🎉</div>
            <div>٢٧/٠٥ ٢ظ — طواف الإفاضة</div>
            <div>٢٨-٢٩/٠٥ — رمي يوم ١١-١٢</div>
            <div>٣٠/٠٥ — طواف الوداع</div>`
            :lang==='en'?`
            <div>25/05 05h — Ghusl + Ihram + Talbiyah</div>
            <div>25/05 09h — Departure to Mina</div>
            <div>25/05 13h — Dhuhr at Mina</div>
            <div>25/05 16h — Asr at Mina</div>
            <div>26/05 05h — Fajr + departure to Arafat</div>
            <div style="color:var(--grn);font-weight:600">26/05 12h — ⭐ ARAFAT ⭐</div>
            <div>26/05 19h30 — Muzdalifah</div>
            <div>27/05 08h — Stoning</div>
            <div style="color:var(--rose);font-weight:600">27/05 10h — Sacrifice + EID 🎉</div>
            <div>27/05 14h — Tawaf al-Ifadah</div>
            <div>28-29/05 — Stoning Day 11-12</div>
            <div>30/05 — Tawaf al-Wada</div>`
            :`
            <div>25/05 05h — Ghusl + Ihram + Talbiyah</div>
            <div>25/05 09h — Départ vers Mina</div>
            <div>25/05 13h — Dhuhr à Mina</div>
            <div>25/05 16h — Asr à Mina</div>
            <div>26/05 05h — Fajr + départ Arafat</div>
            <div style="color:var(--grn);font-weight:600">26/05 12h — ⭐ ARAFAT ⭐</div>
            <div>26/05 19h30 — Muzdalifah</div>
            <div>27/05 08h — Lapidation</div>
            <div style="color:var(--rose);font-weight:600">27/05 10h — Sacrifice + AÏD 🎉</div>
            <div>27/05 14h — Tawaf al-Ifadah</div>
            <div>28-29/05 — Lapidation J11-12</div>
            <div>30/05 — Tawaf al-Wada</div>`}
          </div>
        </details>
      </div>
      <div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:18px;box-shadow:var(--sh)">
        <h4 style="font-size:.95rem;color:var(--grn);margin-bottom:10px">📌 ${lang==='ar'?'معلومات مهمة':lang==='en'?'Key Info':'Infos clés'}</h4>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:6px">${d.keyInfo.map(info => `<div style="display:flex;gap:8px;padding:8px 12px;background:var(--acc);border-radius:var(--r);font-size:.82rem;line-height:1.5;align-items:flex-start;border-left:3px solid var(--gold)"><span style="color:var(--gold);flex-shrink:0">📌</span><span>${info}</span></div>`).join('')}</div>
      </div>
    `;
  }

  // ============ ADD ALL TO GOOGLE CALENDAR ============
  window.addAllToGoogle = function() {
    const events = [
      {t:'Hajj: Ghusl + Ihram + Talbiyah',s:'20260525T020000Z',e:'20260525T030000Z',d:'Bain complet. Ihram. 2 rakat. Talbiyah.',l:'Hotel Makkah'},
      {t:'Hajj: Depart vers Mina',s:'20260525T060000Z',e:'20260525T090000Z',d:'Bus vers Mina (8km). Photographier tente.',l:'Mina Makkah'},
      {t:'⭐ ARAFAT — LE JOUR CLE',s:'20260526T090000Z',e:'20260526T160000Z',d:'Combiner Dhuhr+Asr. Duas non-stop midi au Maghrib. NE PAS QUITTER AVANT LE COUCHER DU SOLEIL.',l:'Plaine de Arafat'},
      {t:'Hajj: Muzdalifah — Nuit',s:'20260526T163000Z',e:'20260526T180000Z',d:'Combiner Maghrib+Isha. Ramasser 49-70 cailloux. Dormir.',l:'Muzdalifah'},
      {t:'Hajj: Lapidation + Sacrifice + AID',s:'20260527T050000Z',e:'20260527T070000Z',d:'7 cailloux Grande Jamara. Sacrifice. Rasage. PREMIER TAHALLUL.',l:'Jamarat Mina'},
      {t:'Hajj: Tawaf al-Ifadah + Sai (PILIER)',s:'20260527T110000Z',e:'20260527T140000Z',d:'7 tours Kaaba + 7 allers-retours Safa-Marwa.',l:'Masjid al-Haram Makkah'},
      {t:'Hajj: Lapidation 3 Jamarat (Jour 11)',s:'20260528T100000Z',e:'20260528T120000Z',d:'Petite→Moyenne→Grande. 21 cailloux.',l:'Jamarat Mina'},
      {t:'Hajj: Lapidation 3 Jamarat (Jour 12)',s:'20260529T100000Z',e:'20260529T120000Z',d:'Meme procedure. Quitter Mina AVANT Maghrib si depart.',l:'Jamarat Mina'},
      {t:'Hajj: Tawaf al-Wada — Adieu',s:'20260530T070000Z',e:'20260530T090000Z',d:'7 tours adieu. 2 rakat. Zamzam. Dernier regard Kaaba.',l:'Masjid al-Haram Makkah'}
    ];
    var opened = 0;
    events.forEach(function(ev, i) {
      setTimeout(function() {
        var url = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
          + '&text=' + encodeURIComponent(ev.t)
          + '&dates=' + ev.s.replace(/[-:]/g,'') + '/' + ev.e.replace(/[-:]/g,'')
          + '&details=' + encodeURIComponent(ev.d)
          + '&location=' + encodeURIComponent(ev.l);
        window.open(url, '_blank');
        opened++;
      }, i * 800);
    });
    setTimeout(function() {
      if (opened === 0) {
        alert('Votre navigateur bloque les pop-ups. Autorisez-les pour ce site, puis réessayez.');
      }
    }, 2000);
  };

  // ============ ICS CALENDAR GENERATOR ============
  window.downloadHajjICS = function() {
    const events = [
      {s:'20260525T050000',e:'20260525T060000',t:'Hajj: Ghusl + Ihram + Talbiyah',d:'Bain complet, parfum, vetir Ihram. 2 rakat. Formuler niyyah du Hajj. Commencer la Talbiyah.',l:'Hotel Makkah'},
      {s:'20260525T090000',e:'20260525T120000',t:'Hajj: Depart vers Mina (8 km)',d:'Bus vers Mina. Continuer la Talbiyah. Trouver sa tente. PHOTOGRAPHIER le numero de camp.',l:'Mina, Makkah'},
      {s:'20260525T130000',e:'20260525T133000',t:'Hajj: Dhuhr a Mina (raccourcie)',d:'Priere Dhuhr raccourcie a 2 rakat. NE PAS combiner avec Asr.',l:'Mina, Makkah'},
      {s:'20260525T160000',e:'20260525T163000',t:'Hajj: Asr a Mina (raccourcie)',d:'Priere Asr raccourcie a 2 rakat.',l:'Mina, Makkah'},
      {s:'20260526T050000',e:'20260526T060000',t:'Hajj: Fajr a Mina puis depart Arafat',d:'Priez Fajr a Mina. Depart vers Arafat (14 km).',l:'Mina, Makkah'},
      {s:'20260526T120000',e:'20260526T190000',t:'⭐ ARAFAT — LE PLUS GRAND JOUR ⭐',d:'Combiner Dhuhr+Asr. Puis DUAS NON-STOP de midi au Maghrib. Meilleure dua: La ilaha illallah wahdahu la sharika lah. NE PAS QUITTER AVANT LE COUCHER DU SOLEIL.',l:'Plaine de Arafat'},
      {s:'20260526T193000',e:'20260526T210000',t:'Hajj: Depart Arafat → Muzdalifah',d:'Apres le coucher du soleil: depart vers Muzdalifah (9 km). Combiner Maghrib+Isha. RAMASSER 49-70 cailloux. Dormir a la belle etoile.',l:'Muzdalifah'},
      {s:'20260527T050000',e:'20260527T060000',t:'Hajj: Fajr Muzdalifah + depart',d:'Priez Fajr a Muzdalifah. Depart vers Mina apres le lever du soleil.',l:'Muzdalifah'},
      {s:'20260527T080000',e:'20260527T100000',t:'Hajj: Lapidation Jamarat al-Aqaba',d:'7 cailloux sur la GRANDE Jamara UNIQUEMENT. Allahu Akbar a chaque lancer. ARRETEZ la Talbiyah apres le 1er caillou.',l:'Jamarat, Mina'},
      {s:'20260527T100000',e:'20260527T110000',t:'Hajj: Sacrifice + Rasage = AID MOUBARAK',d:'Sacrifice (coupon agence). Rasage complet (H) ou coupe 2cm (F). PREMIER TAHALLUL: tout redevient permis sauf relations conjugales.',l:'Mina, Makkah'},
      {s:'20260527T140000',e:'20260527T170000',t:'Hajj: Tawaf al-Ifadah + Sai (PILIER)',d:'7 tours de la Kaaba + 7 allers-retours Safa-Marwa. PILIER — ne pas oublier. Peut etre reporte au 11 ou 12.',l:'Masjid al-Haram, Makkah'},
      {s:'20260528T130000',e:'20260528T150000',t:'Hajj: Lapidation 3 Jamarat (Jour 11)',d:'ORDRE: Petite → Moyenne → Grande. 7 cailloux chacune = 21 total. Dua longue apres Petite et Moyenne (face Qibla). PAS de dua apres la Grande.',l:'Jamarat, Mina'},
      {s:'20260529T130000',e:'20260529T150000',t:'Hajj: Lapidation 3 Jamarat (Jour 12)',d:'Meme procedure. Si vous partez aujourd hui: quittez Mina AVANT le Maghrib. Sinon restez pour le 13.',l:'Jamarat, Mina'},
      {s:'20260530T100000',e:'20260530T120000',t:'Hajj: Tawaf al-Wada (Adieu)',d:'7 tours d adieu. 2 rakat Maqam Ibrahim. Buvez Zamzam. Dernier regard sur la Kaaba. WAJIB — ne pas sauter. Femmes en menstruation: exemptees.',l:'Masjid al-Haram, Makkah'},
      {s:'20260526T050000',e:'20260526T053000',t:'RAPPEL: Takbir at-Tashriq commence',d:'A partir de Fajr du 9 Dhul Hijjah: recitez le Takbir apres CHAQUE priere obligatoire. Allahu Akbar Allahu Akbar la ilaha illallah wallahu akbar Allahu akbar wa lillahil hamd.',l:'Makkah'}
    ];
    var ics = 'BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//HajjGuide//FR\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\nX-WR-CALNAME:Hajj 2026\r\nX-WR-TIMEZONE:Asia/Riyadh\r\nX-WR-CALDESC:Dates estimees — peuvent varier de +/-1 jour selon observation lunaire officielle.\r\n';
    events.forEach(function(ev, idx) {
      ics += 'BEGIN:VEVENT\r\n';
      ics += 'DTSTART;TZID=Asia/Riyadh:' + ev.s + '\r\n';
      ics += 'DTEND;TZID=Asia/Riyadh:' + ev.e + '\r\n';
      ics += 'SUMMARY:' + ev.t + '\r\n';
      ics += 'DESCRIPTION:' + ev.d.replace(/,/g, '\\,') + '\r\n';
      ics += 'LOCATION:' + ev.l + '\r\n';
      ics += 'UID:hajj2026-' + idx + '@guidehajj\r\n';
      ics += 'BEGIN:VALARM\r\nTRIGGER:-PT60M\r\nACTION:DISPLAY\r\nDESCRIPTION:' + ev.t + ' dans 1 heure\r\nEND:VALARM\r\n';
      ics += 'BEGIN:VALARM\r\nTRIGGER:-PT15M\r\nACTION:DISPLAY\r\nDESCRIPTION:' + ev.t + ' dans 15 minutes!\r\nEND:VALARM\r\n';
      ics += 'END:VEVENT\r\n';
    });
    ics += 'END:VCALENDAR';
    var blob = new Blob([ics], {type: 'text/calendar;charset=utf-8'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = 'hajj-2026-programme-complet.ics';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ============ OMRA GUIDE ============
  function renderOmra() {
    var c = document.getElementById('omraContainer'); if (!c) return;
    var d = D('omra'); if (!d) return;

    var diffHtml = '<div style="overflow-x:auto;margin-bottom:20px"><table style="width:100%;border-collapse:collapse;font-size:.84rem">';
    diffHtml += '<tr style="background:var(--acc)"><th style="padding:10px 14px;text-align:left;color:var(--gold);border-bottom:2px solid var(--gold)">' + (lang==='ar'?'المقارنة':lang==='en'?'Aspect':'Aspect') + '</th><th style="padding:10px 14px;color:var(--teal);border-bottom:2px solid var(--teal)">Hajj</th><th style="padding:10px 14px;color:var(--grn);border-bottom:2px solid var(--grn)">Omra</th></tr>';
    d.difference.items.forEach(function(item) {
      diffHtml += '<tr style="border-bottom:1px solid var(--brd)"><td style="padding:10px 14px;font-weight:700;color:var(--t1)">' + item.aspect + '</td><td style="padding:10px 14px;color:var(--t2)">' + item.hajj + '</td><td style="padding:10px 14px;color:var(--t2)">' + item.omra + '</td></tr>';
    });
    diffHtml += '</table></div>';

    var stepsHtml = d.steps.map(function(s) {
      return '<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:14px;border-left:5px solid var(--teal)">'
        + '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">'
        + '<div style="min-width:36px;height:36px;border-radius:50%;background:var(--teal);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1rem;font-weight:700;flex-shrink:0">' + s.num + '</div>'
        + '<div><h3 style="font-size:1.05rem;font-weight:700;color:var(--t1);margin:0">' + s.emoji + ' ' + s.title + '</h3>'
        + '<div style="font-size:.72rem;color:var(--t3);margin-top:2px">📍 ' + s.where + '</div></div></div>'
        + '<p style="font-size:.88rem;color:var(--t2);line-height:1.7;margin-bottom:12px">' + s.desc + '</p>'
        + (s.dua ? '<div style="font-family:var(--fa);font-size:1.1rem;color:var(--grn);direction:rtl;text-align:right;padding:12px;background:rgba(46,125,82,.06);border-radius:var(--r);margin-bottom:10px;line-height:1.8">' + s.dua + '</div>' : '')
        + (s.tips ? '<div style="padding:10px 14px;background:rgba(200,168,78,.08);border-radius:var(--r);border-left:3px solid var(--gold);font-size:.82rem;color:var(--t1);margin-bottom:10px"><b>' + T('tipLabel') + ' :</b> ' + s.tips + '</div>' : '')
        + (s.errors && s.errors.length ? '<div style="padding:10px 14px;background:rgba(196,90,107,.06);border-radius:var(--r);border-left:3px solid var(--rose);font-size:.82rem;color:var(--t1)"><b>⚠️ ' + T('errorsLabel') + ' :</b><ul style="margin:6px 0 0;padding-left:18px">' + s.errors.map(function(e){return '<li>' + e + '</li>';}).join('') + '</ul></div>' : '')
        + '</div>';
    }).join('');

    var miqatHtml = '<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:20px">'
      + '<h3 style="font-size:1.05rem;font-weight:700;color:var(--gold);margin-bottom:6px">' + d.miqat.title + '</h3>'
      + '<p style="font-size:.84rem;color:var(--t2);margin-bottom:14px;line-height:1.6">' + d.miqat.desc + '</p>'
      + '<div style="display:grid;gap:8px">' + d.miqat.points.map(function(p) {
        return '<div style="display:flex;gap:12px;padding:10px 14px;background:var(--acc);border-radius:var(--r);border-left:3px solid var(--teal);align-items:center">'
          + '<div style="flex:1"><b style="font-size:.88rem;color:var(--t1)">' + p.name + '</b><div style="font-size:.75rem;color:var(--t3);margin-top:2px">' + p.direction + '</div></div>'
          + '<span style="font-size:.78rem;font-weight:700;color:var(--teal);white-space:nowrap">' + p.km + '</span></div>';
      }).join('') + '</div></div>';

    var bestHtml = '<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--rr);padding:20px;box-shadow:var(--sh);margin-bottom:16px">'
      + '<h3 style="font-size:1.05rem;font-weight:700;color:var(--gold);margin-bottom:12px">' + d.bestTimes.title + '</h3>'
      + '<div style="display:grid;gap:6px">' + d.bestTimes.items.map(function(item) {
        return '<div style="padding:8px 12px;background:var(--acc);border-radius:var(--r);font-size:.84rem;color:var(--t1);line-height:1.5;border-left:3px solid var(--gold)">' + item + '</div>';
      }).join('') + '</div></div>';

    c.innerHTML = '<div style="margin-bottom:20px"><h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:8px">' + d.title + '</h2>'
      + '<p style="font-size:.9rem;color:var(--t2);line-height:1.7">' + d.intro + '</p></div>'
      + '<h3 style="font-size:1.05rem;font-weight:700;color:var(--teal);margin-bottom:12px">' + d.difference.title + '</h3>'
      + diffHtml
      + '<h3 style="font-size:1.1rem;font-weight:700;color:var(--gold);margin-bottom:14px">' + (lang==='ar'?'الخطوات الأربع':lang==='en'?'The 4 Steps':'Les 4 Étapes') + '</h3>'
      + stepsHtml
      + miqatHtml
      + bestHtml
      + '<div style="padding:14px 18px;background:var(--acc);border-radius:var(--rr);font-size:.84rem;color:var(--t2);line-height:1.6">⏱️ ' + d.duration + '</div>';
  }

  // ============ COMPANION GUIDE ============
  // ============ COMPANION GUIDE — Day Selector ============
  let activeDay = 0;

  function renderCompanion() {
    const d = D('companionGuide');
    if (!d) return;
    const c = document.getElementById('companionContainer'); if (!c) return;
    const dayColors = ['#1a8a7d','#2e7d52','#c45a6b','#c8a84e','#9a8c7a'];

    function renderDay(di) {
      activeDay = di;
      var day = d[di];
      var col = dayColors[di];
      var dayLocations = T('dayLocations');
      var dayShortNames = T('dayNames');
      var mapLabelsArr = T('mapLabels');

      // Mini location map SVG showing where we are
      var mapPts = [{x:60,y:45,l:mapLabelsArr[0]},{x:200,y:35,l:mapLabelsArr[1]},{x:360,y:25,l:mapLabelsArr[2]},{x:310,y:50,l:mapLabelsArr[3]},{x:230,y:55,l:mapLabelsArr[4]}];
      var dayHighlight = [[0,1],[1,2],[1,4,0],[1,4],[0]]; // which points to highlight per day
      var miniMap = '<svg viewBox="0 0 420 70" style="width:100%;max-width:420px;height:auto;margin:0 auto 16px;display:block">';
      miniMap += '<rect width="420" height="70" rx="8" fill="var(--acc)" opacity=".3"/>';
      // Routes
      miniMap += '<path d="M60 45 Q130 30 200 35" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      miniMap += '<path d="M200 35 Q280 25 360 25" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      miniMap += '<path d="M360 25 L310 50" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      miniMap += '<path d="M310 50 L230 55" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      miniMap += '<path d="M230 55 Q150 50 60 45" stroke="var(--brd)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>';
      // Points
      var hl = dayHighlight[di] || [];
      mapPts.forEach(function(pt, pi) {
        var isHere = hl.indexOf(pi) !== -1;
        miniMap += '<circle cx="'+pt.x+'" cy="'+pt.y+'" r="'+(isHere?10:6)+'" fill="'+(isHere?col:'var(--brd)')+'" opacity="'+(isHere?'.9':'.4')+'"/>';
        if (isHere) miniMap += '<circle cx="'+pt.x+'" cy="'+pt.y+'" r="14" fill="'+col+'" opacity=".15"><animate attributeName="r" values="14;18;14" dur="2s" repeatCount="indefinite"/></circle>';
        miniMap += '<text x="'+pt.x+'" y="'+(pt.y-12)+'" text-anchor="middle" font-size="'+(isHere?'7.5':'6')+'" fill="'+(isHere?col:'var(--t3)')+'" font-weight="'+(isHere?'700':'400')+'" font-family="sans-serif">'+pt.l+'</text>';
      });
      miniMap += '<text x="210" y="68" text-anchor="middle" font-size="6" fill="var(--t3)" font-family="sans-serif">' + T('youAreHere') + dayLocations[di] + '</text>';
      miniMap += '</svg>';

      // Day selector strip with LOCATION names
      var strip = '<div style="display:flex;gap:6px;margin-bottom:12px;overflow-x:auto;padding-bottom:4px;scrollbar-width:none">';
      for (var j = 0; j < d.length; j++) {
        var isActive = j === di;
        var jcol = dayColors[j];
        strip += '<button onclick="selectHajjDay(' + j + ')" style="flex:1;min-width:60px;padding:10px 6px;border-radius:var(--rr);border:2px solid ' + (isActive ? jcol : 'var(--brd)') + ';background:' + (isActive ? jcol + '18' : 'var(--card)') + ';cursor:pointer;text-align:center;transition:.3s;box-shadow:' + (isActive ? '0 4px 12px ' + jcol + '30' : 'var(--sh)') + '">';
        strip += '<div style="font-size:1.2rem;margin-bottom:2px">' + d[j].emoji + '</div>';
        strip += '<div style="font-size:.62rem;font-weight:700;color:' + (isActive ? jcol : 'var(--t3)') + ';white-space:nowrap">' + dayShortNames[j].replace(/^[^\w\u0600-\u06FF]+/,'') + '</div>';
        strip += '</button>';
      }
      strip += '</div>';

      // Navigation arrows
      var nav = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
      if (di > 0) {
        nav += '<button onclick="selectHajjDay(' + (di-1) + ')" style="border:none;background:var(--acc);padding:8px 16px;border-radius:20px;font-size:.8rem;font-weight:600;cursor:pointer;color:var(--t2);transition:.3s;font-family:var(--fu)">◀ ' + dayShortNames[di-1] + '</button>';
      } else { nav += '<div></div>'; }
      nav += '<div style="font-size:.78rem;font-weight:700;color:' + col + '">' + T('youAreHere') + dayLocations[di] + '</div>';
      if (di < d.length - 1) {
        nav += '<button onclick="selectHajjDay(' + (di+1) + ')" style="border:none;background:var(--acc);padding:8px 16px;border-radius:20px;font-size:.8rem;font-weight:600;cursor:pointer;color:var(--t2);transition:.3s;font-family:var(--fu)">' + dayShortNames[di+1] + ' ▶</button>';
      } else { nav += '<div></div>'; }
      nav += '</div>';

      // Day header
      var header = '<div style="display:flex;align-items:center;gap:14px;padding:18px 20px;background:linear-gradient(135deg,' + col + '15,transparent);border-radius:var(--rr);margin-bottom:16px;border:1px solid ' + col + '25">';
      header += '<span style="font-size:2.4rem;width:56px;height:56px;display:flex;align-items:center;justify-content:center;background:' + col + '20;border-radius:14px;flex-shrink:0">' + day.emoji + '</span>';
      header += '<div><div style="font-size:1.1rem;font-weight:800;color:var(--t1)">' + day.day + '</div><div style="font-size:.88rem;color:' + col + ';font-weight:700">' + day.title + '</div></div>';
      header += '</div>';

      // Schedule
      var schedule = '<div style="margin-bottom:16px;padding:16px;background:var(--acc);border-radius:var(--r)">';
      schedule += '<div style="font-size:.82rem;font-weight:700;color:' + col + ';margin-bottom:12px">' + T('scheduleTitle') + '</div>';
      day.schedule.forEach(function(s) {
        schedule += '<div style="display:flex;gap:10px;padding:10px 12px;margin-bottom:4px;background:var(--card);border-radius:8px;border-left:3px solid ' + col + ';transition:.2s" onmouseover="this.style.transform=\'translateX(3px)\'" onmouseout="this.style.transform=\'\'">';
        schedule += '<span style="min-width:80px;font-weight:700;color:' + col + ';flex-shrink:0;font-size:.8rem">' + s.time + '</span>';
        schedule += '<span style="color:var(--t1);line-height:1.5;font-size:.82rem">' + s.action + '</span></div>';
      });
      schedule += '</div>';

      // Duas
      var duas = '<div style="margin-bottom:16px"><div style="font-size:.82rem;font-weight:700;color:var(--grn);margin-bottom:10px">' + T('duasTitle') + '</div>';
      day.duas.forEach(function(dua) {
        duas += '<div style="background:var(--card);border:1px solid var(--brd);border-radius:var(--r);padding:14px;margin-bottom:8px">';
        duas += '<div style="font-family:var(--fd);font-size:1.15rem;color:var(--grn);direction:rtl;text-align:right;line-height:1.9;padding:10px;background:rgba(46,125,82,.05);border-radius:8px;margin-bottom:8px">' + dua.ar + '</div>';
        duas += '<div style="font-size:.76rem;font-style:italic;color:var(--t3);margin-bottom:3px">' + dua.translit + '</div>';
        duas += '<div style="font-size:.82rem;color:var(--t1);margin-bottom:4px">🇫🇷 ' + dua.fr + '</div>';
        if (dua.note) duas += '<div style="font-size:.7rem;font-weight:600;color:var(--gold);padding:4px 8px;background:rgba(200,168,78,.08);border-radius:6px;display:inline-block">' + dua.note + '</div>';
        duas += '</div>';
      });
      duas += '</div>';

      // Pack + Alerts grid
      var grid = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">';
      grid += '<div style="background:rgba(59,125,216,.05);border-radius:var(--r);padding:12px 14px;border:1px solid rgba(59,125,216,.12)">';
      grid += '<div style="font-size:.8rem;font-weight:700;color:var(--blue);margin-bottom:6px">' + T('packTitle') + '</div>';
      grid += '<div style="font-size:.78rem;color:var(--t1);line-height:1.5">' + day.pack.replace('🎒 ','') + '</div></div>';
      grid += '<div style="background:rgba(196,90,107,.04);border-radius:var(--r);padding:12px 14px;border:1px solid rgba(196,90,107,.12)">';
      grid += '<div style="font-size:.8rem;font-weight:700;color:var(--rose);margin-bottom:6px">' + T('alertsTitle') + '</div>';
      day.alerts.forEach(function(a) { grid += '<div style="font-size:.75rem;color:var(--t1);line-height:1.4;padding:3px 0">' + a + '</div>'; });
      grid += '</div></div>';

      // Guide tip
      var tip = '<div style="display:flex;gap:12px;background:linear-gradient(135deg,rgba(200,168,78,.08),rgba(200,168,78,.02));border:1px solid rgba(200,168,78,.15);border-radius:var(--rr);padding:14px 16px;margin-bottom:14px">';
      tip += '<span style="font-size:1.4rem;flex-shrink:0">🧑‍🏫</span>';
      tip += '<div style="font-size:.82rem;color:var(--t1);line-height:1.65;font-style:italic">' + day.guideTip.replace('🧑‍🏫 ','') + '</div></div>';

      c.innerHTML = '<h2 style="font-family:var(--fd);font-size:1.4rem;color:var(--gold);margin-bottom:16px;text-align:center">' + T('companionTitle') + '</h2>'
        + strip + miniMap + header + nav + schedule + duas + grid + tip + nav;
    }

    renderDay(activeDay);
  }

  window.selectHajjDay = function(di) {
    activeDay = di;
    renderCompanion();
    var c = document.getElementById('companionContainer');
    if (c) c.scrollIntoView({behavior:'smooth', block:'start'});
  };



  // ============ SHARE ============
  window.shareGuide = function() {
    var title = lang === 'ar' ? 'دليل الحج الشامل ٢٠٢٦' : 'Guide Complet du Hajj 2026';
    var text = lang === 'ar' ? 'دليل الحج خطوة بخطوة مع الأدعية والبرنامج اليومي' : 'Guide du Hajj pas à pas avec duas et programme jour par jour';
    if (navigator.share) {
      navigator.share({ title: title, text: text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href).then(function() {
        var btn = document.getElementById('shareBtn');
        var orig = btn.textContent;
        btn.textContent = lang === 'ar' ? '✅ تم النسخ!' : '✅ Lien copié !';
        setTimeout(function() { btn.textContent = orig; }, 2000);
      });
    }
  };

  // Workshop logo in header
  var wLogo = document.getElementById('workshopLogo');
  if (wLogo) wLogo.innerHTML = WORKSHOP_LOGO_SVG;

  // Pixel pet in footer
  function initPixelPet() {
    var pet = document.createElement('div');
    pet.id = 'pixelPet';
    pet.className = 'pixel-pet pet-idle';
    pet.title = 'Click me!';
    pet.innerHTML = '<img src="' + FOOTER_ICON + '" alt="Bot" />';
    var petIdleTimer = null;
    pet.addEventListener('click', function() {
      pet.classList.remove('pet-idle', 'pet-happy');
      pet.classList.add('pet-happy');
      if (petIdleTimer) clearTimeout(petIdleTimer);
      petIdleTimer = setTimeout(function() {
        pet.classList.remove('pet-happy');
        pet.classList.add('pet-idle');
      }, 3000);
    });
    var poweredBy = document.getElementById('poweredBy');
    if (poweredBy) poweredBy.insertBefore(pet, poweredBy.firstChild);
  }
  initPixelPet();

  // INIT
  // Splash — skip immediately in test environment
  if (localStorage.getItem('hajj-skip-splash')) { dismissSplash(); }
  // Populate splash guide based on language
  var splashGuide = document.getElementById('splashGuide');
  var splashTitle = document.getElementById('splashTitle');
  var splashHint = document.getElementById('splashHint');
  if (splashGuide) {
    var guideItems = lang === 'ar' ? [
      '🕋 <b>حجّي</b> — دليلك يوماً بيوم',
      '📖 <b>تعلّم</b> — المناسك، الأدعية، اللباس',
      '✅ <b>استعد</b> — قائمة التحضير، التكاليف، التطبيقات',
      '🔍 <b>المزيد</b> — أسئلة، صحة، اختبار',
      '🤲 <b>الأدعية</b> — الزر العائم في الأسفل'
    ] : lang === 'en' ? [
      '🕋 <b>My Hajj</b> — Day by day companion',
      '📖 <b>Learn</b> — Rituals, duas, clothing',
      '✅ <b>Prepare</b> — Checklist, costs, apps',
      '🔍 <b>More</b> — FAQ, health, quiz',
      '🤲 <b>Duas</b> — Floating button at bottom'
    ] : [
      '🕋 <b>Mon Hajj</b> — Jour par jour',
      '📖 <b>Apprendre</b> — Rituels, duas, tenue',
      '✅ <b>Préparer</b> — Checklist, coûts, apps',
      '🔍 <b>Plus</b> — FAQ, santé, quiz',
      '🤲 <b>Duas</b> — Bouton flottant en bas'
    ];
    splashGuide.innerHTML = guideItems.map(function(item) {
      return '<div class="splash-guide-item">' + item + '</div>';
    }).join('');
  }
  if (splashTitle) splashTitle.textContent = lang === 'ar' ? 'دليل الحج' : lang === 'en' ? 'Hajj Guide' : 'Guide du Hajj';
  if (splashHint) splashHint.textContent = lang === 'ar' ? 'انقر للتخطي' : 'tap to skip';

  var splashCreditLogo = document.getElementById('splashCreditLogo');
  if (splashCreditLogo) splashCreditLogo.innerHTML = WORKSHOP_LOGO_SVG;

  splashTimer = setTimeout(dismissSplash, 13000);
  // Countdown in splash
  var splashCountEl = document.getElementById('splashCount');
  if (splashCountEl) {
    var splashSec = 13;
    splashCountEl.textContent = splashSec;
    var countInterval = setInterval(function() {
      splashSec--;
      if (splashSec <= 0) { clearInterval(countInterval); return; }
      if (splashCountEl) splashCountEl.textContent = splashSec;
    }, 1000);
  }
  // First visit → open help guide
  if (!localStorage.getItem('hajj-visited')) {
    localStorage.setItem('hajj-visited', '1');
    setTimeout(function() { if (typeof toggleHelp === 'function') toggleHelp(); }, 13100);
  }

  // Hijri date
  var hijriEl = document.getElementById('hijriDate');
  if (hijriEl) { var h = calcHijriDate(); if (h) hijriEl.textContent = h; }

  // Smart ticker
  startTicker();

  // Night mode auto-detect
  initNightMode();

  // Shake to report (mobile)
  initShakeReport();

  // Wire sound to checklist toggle
  var origCkToggle = window.ckToggle;
  window.ckToggle = function(el) { origCkToggle(el); playSound('click'); };

  // Wire sound to tab clicks
  document.querySelectorAll('.tab').forEach(function(b) {
    b.addEventListener('click', function() { playSound('click'); });
  });

  applyLang();
  renderAll();
});
