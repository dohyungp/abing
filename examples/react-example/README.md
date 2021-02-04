# ABING React example

1. `/experiments/create`에서 아래와 같은 조건으로 실험을 생성해주세요.
   * 실험명은 아무것이나 상관없습니다.
   * Arm 이름도 무엇이든 상관없지만, 올바른 테스트를 위해 최소 2개의 Arm을 준비해주세요.
   * 각 Arm에는 fontColor와 backgroundColor라는 Feature를 만들어주세요.
   * 저는 아래와 같은 조건으로 최종 세팅했습니다.
     - BASELINE이라는 이름의 Arm을 만들고, fontColor는 `#fff`, backgroundColor는 `#000`으로 설정했습니다.
     - VARIANT이라는 이름의 Arm을 만들고, fontColor는 `#000`, backgroundColor는 `#fff`로 설정했습니다.

2. 이제 준비가 됐다면 `/experiments/`에서 toggle 버튼을 눌러 실험을 activation해주세요.
3. 정상적으로 세팅되었다면 fontColor와 backgroundColor가 uuid에 따라 지정되서 보일거에요.
   * 간단한 POC(Proof of Concept)이기 때문에 `localStorge.setItem`을 통해 uuid를 저장했으나 필요 시 uuid를 저장하지 않고 리프레시로 정말 변하는지 테스트해볼 수도 있습니다.
   * api 호출은 `index.js`와 같은 entrypoint에서 실행하는 것이 좋으며 global context를 위해 `createContext`와 같은 Provider 방식도 가능합니다.
   * 위의 방식은 추후 별도의 sdk로 개발 후 npm 배포 예정입니다 :) 