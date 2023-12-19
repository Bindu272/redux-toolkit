import React from "react";
import { render, screen } from "@testing-library/react";
import TimeAgo from "../../../features/posts/TimeAgo";

jest.mock("date-fns", () => ({
  parseISO: jest.fn(() => new Date("2023-01-01T12:00:00Z")),
  formatDistanceToNow: jest.fn(() => "2 days"),
}));

describe("TimeAgo Component", () => {
  it("renders correctly with a timestamp", () => {
  
    const timestamp = "2023-01-01T12:00:00Z";

  
    render(<TimeAgo timestamp={timestamp} />);

    
    expect(screen.getByTitle(timestamp)).toBeInTheDocument();
    expect(screen.getByText("2 days ago")).toBeInTheDocument();
  });

  it("renders correctly without a timestamp", () => {
    
    render(<TimeAgo />);
    expect(screen.queryByTitle("")).toBeNull();
    // expect(screen.queryAllByText(/.*/)).toBeNull();

  });
  
  
});
