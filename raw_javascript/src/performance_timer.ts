export default class PerformanceTimer {
  private static mStartTime: any;
  private static mEndTime: any;

  public static Start(): void {
    // The Performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds, accurate to one thousandth of a millisecond.
    PerformanceTimer.mStartTime = performance.now();
  }

  public static End(label?: string): void {
    PerformanceTimer.mEndTime = performance.now();
    var deltaTime: string = PerformanceTimer.ComputeDeltaTime().toString();
    if (label !== undefined) {
      console.log("Performance :: " + label + " :: " + deltaTime + " ms.")
    } else {
      console.log("Performance :: " +  deltaTime + " ms.")
    }
  }

  private static ComputeDeltaTime(): number {
    return PerformanceTimer.mEndTime - PerformanceTimer.mStartTime;
  }
}
