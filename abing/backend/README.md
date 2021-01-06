# Welcome to ABING!

## What is ABIRARY?

ABING는 AB테스트를 위한 라우팅 툴입니다. 일반적인 비즈니스 모델에서 사용할 수 있도록 ABING는 별도의 연동과정 없이 AB테스팅을 운영할 수 있도록 개발되었습니다. UI에서 실험 생성 및 설정 후 route API([/api/v1/experiments/route](localhost:8000/api/v1/experiments/route))에서 각 user id별(필요 시 uuid)로 할당만 받으면 자유롭게 AB테스팅을 할 수 있습니다.

## Getting started

### Installation

🚧 TBU

### 실험 생성하기

1. Experiments - List에서 Add a new experiment를 클릭하시거나, Experiments - Create를 눌러 실험 생성 메뉴로 갈 수 있습니다.
2. 각 항목을 입력하고, Create를 누르면 실험이 생성됩니다.
   * Name(실험 명)은 고유할 필요는 없으나, 운영차원에서 코드와 함께 관리되는 것이 좋습니다.
   * Create로 만들때에는 실험은 런칭이 되지 않은 상태로 리스트업됩니다.
   * `+` Add Arm을 누르면 바로 생성할 Arm을 추가할 수 있습니다. 이 때 Traffic은 얼마나 유저를 해당 Arm에 보낼지에 대한 가중치로, 모든 Arm 합산 대비 해당 Arm의 비율로 내부적으로 계산되어 추후 Arm 선택 시 반영됩니다.
   * 각 Arm의 Feature는 해당 Arm이 선택되었을 때 보여줄 Feature flag입니다. 예를 들어 feature `key`가 `fontColor`라면 `value`는 `#fff`같이 입력하여 자유롭게 클라이언트에서 dynamic한 값으로 사용할 수 있습니다. 물론 key value는 문자열에 불과하기 때문에 사용자에 따라서는 분기를 위한 flag 수준으로만 사용해도 무방합니다(e.g `key`에 `is_baseline`, `value`에 `true` 이런 식으로 지정할 수 있습니다)

### 실험 운영하기

1. 실험이 성공적으로 만들어졌다면 **Experiments - List**에서 실험을 찾아볼 수 있습니다.
   * 실험은 운영 중인 실험, 최근에 만든 실험 순, 최근에 업데이트된 실험 순으로 자동 정렬되어 있습니다.
   * Progress는 일종의 부가정보입니다. Progress가 100%에 도달한다고 해서 실험이 종료되거나 하지 않습니다.
2. 방근 만든 실험을 바로 런칭하고 싶다면 오른쪽 스위치를 누르기만 하면 됩니다.
   * 실험 정보를 보고 싶다면 `+`를 눌러 펼쳐보거나 실험명에 있는 링크를 눌러 자세히 볼 수 있습니다.
3. 포함해야 하는 feature 혹은 Arm이 있는데 반영이 안되었다면 링크를 눌러 수정할 수 있습니다.


### Client에서 실험 라우팅하기

1. `/api/v1/experiments/route`를 통해 현재 운영중인 모든 실험의 각 arm에 할당될 수 있습니다.
   * parameter로 `user_id` 값만 보내주면 됩니다.
   * user_id는 로그인이 없는 서비스라면 uuid값을 보내주는 것으로 충분합니다. 로그인마다 동일하게 보이려면 local storage에 uuid를 저장하기만 하면 됩니다(abing는 별도의 id 저장없이 동일한 traffic allocation이 가능하도록 디자인 되었습니다)
2. `/api/v1/experiments/{id}/route`를 통해 특정 id의 실험에 한해 route받을 수도 있습니다.
   * 모든 parameter는 `/api/v1/experiments/route`와 동일합니다.


## Future

### 추가 기능

1. MAB 기능 지원: Thomson sampling, Eplisilon Greedy, UCB 세가지 유형을 지원.
2. SDK: 각 언어에 맞는 sdk를 지원하여, 다양한 플랫폼에서 활용할 수 있도록 함.
3. 실험 통계 기능: 각 실험화면에서 Sample size calculator, Significant calculator 및 Power analysis 등을 지원
4. Tag 기능: Arm 태그 기능을 통해 특정 태그값을 가지고 있는 경우 특정 Arm으로 포함되도록 지원(e.g Control tag가 iOS이고 client에서 보내주는 User meta에 iOS가 포함되면 해당 Arm에 포함)
5. 사용성 증대: 실험 검색 기능, 카테고리 기능 추가
6. 기타 Bug fix: 에러 메시지 분류 등
