class ArrayUtils {
    static WrapInArray<T>(value: T) {
    return [value];
}

}

let numbers = ArrayUtils.WrapInArray(1)