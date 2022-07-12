import { reactive, toRefs } from "vue";

interface UseIsLoadingState {
  isLoading: boolean;
  }

  const useIsLoading = () => {
    const state = reactive<UseIsLoadingState>({
      isLoading: false
    })

    const toggleIsLoading = () => {
      state.isLoading = !state.isLoading
    }

    return { ...toRefs(state), toggleIsLoading }
  }

  export default useIsLoading
