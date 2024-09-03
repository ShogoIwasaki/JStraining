import { describe, it, expect, jest } from "@jest/globals";
import { retryWithExponentialBackoff } from "./index.js";

describe("retryWithExponentialBackoff", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("returns immediately if func returns true", () => {
    const func = jest.fn().mockReturnValue(true);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 3, callback);

    expect(func).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(true);
  });

  it("retries up to maxRetry times if func returns false", () => {
    const func = jest.fn().mockReturnValue(false);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 3, callback);

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(4);
    expect(callback).toHaveBeenCalledWith(false);
  });

  it("stops retrying once func returns true", () => {
    const func = jest
      .fn()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 3, callback);

    jest.runAllTimers();

    expect(func).toHaveBeenCalledTimes(3);
    expect(callback).toHaveBeenCalledWith(true);
  });

  it("waits exponentially longer between each retry", () => {
    const func = jest.fn().mockReturnValue(false);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 3, callback);

    expect(func).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(2);

    jest.advanceTimersByTime(2000);
    expect(func).toHaveBeenCalledTimes(3);

    jest.advanceTimersByTime(4000);
    expect(func).toHaveBeenCalledTimes(4);
    expect(callback).toHaveBeenCalledWith(false);
  });
});
